"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  ChangeEvent,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from "react"
import Link from "next/link"

import { cl, getImageSrc } from "@/utils"
import { ARROW, CROSS } from "@/constants"
import AppImage from "@/components/Common/AppImage"
import Button from "@/components/Common/Button"
import Input from "@/components/Common/Input"
import Checkbox from "@/components/Common/Checkbox"

import styles from "./index.module.scss"

interface IAuthForm {
  className?: string
}

const AuthForm = ({ className = "" }: IAuthForm) => {
  const router = useRouter()

  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [confirmAgreement, setConfirmAgreement] = useState(false)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username = formData.get("username")

    if (!showSignIn && !showSignUp) {
      console.log("Проверка на существование юзернейма")
      if (username === "vanya") {
        setShowSignIn((prev) => !prev)
      } else {
        setShowSignUp((prev) => !prev)
      }
      return
    }

    if (showSignIn) {
      console.log("Это авторизация")
      const password = formData.get("password")
      console.log(username, password)
    } else if (showSignUp) {
      console.log("Это регистрация")
      const password = formData.get("password")
      const confirmPassword = formData.get("confirmPassword")
      console.log(username, password, confirmPassword)
    }
  }

  const handleResetStates = () => {
    setShowSignIn(false)
    setShowSignUp(false)
    setConfirmAgreement(false)
  }

  return (
    <>
      <div className={cl(styles.authForm, className)}>
        <div className={styles.authForm__header}>
          <Button
            variant="subtle"
            className={styles.authForm__header__back}
            onClick={handleResetStates}
          >
            <AppImage src={CROSS} width={24} height={24} />
          </Button>
          <h3 className={styles.authForm__header__title}>Вход</h3>
        </div>
        <form onSubmit={handleSubmit} className={styles.authForm__form}>
          <Input
            variant="light"
            right={
              !showSignIn &&
              !showSignUp && (
                <Button
                  type="submit"
                  variant="subtle"
                  className={styles.authForm__form__button}
                >
                  <AppImage src={ARROW} width={20} height={20} />
                </Button>
              )
            }
            placeholder="Имя пользователя"
            name="username"
            onChange={handleResetStates}
          />
          {showSignIn && (
            <>
              <Input
                className={styles.authForm__form__input}
                variant="light"
                right={
                  <Button
                    type="submit"
                    variant="subtle"
                    className={styles.authForm__form__button}
                  >
                    <AppImage src={ARROW} width={20} height={20} />
                  </Button>
                }
                placeholder="Пароль"
                name="password"
              />
            </>
          )}
          {showSignUp && (
            <>
              <Input
                className={styles.authForm__form__input}
                variant="light"
                placeholder="Пароль"
                name="password"
              />
              <Input
                className={styles.authForm__form__input}
                variant="light"
                right={
                  confirmAgreement && (
                    <Button
                      type="submit"
                      variant="subtle"
                      className={styles.authForm__form__button}
                    >
                      <AppImage src={ARROW} width={20} height={20} />
                    </Button>
                  )
                }
                placeholder="Повторите пароль"
                name="confirmPassword"
              />
              <Checkbox
                onChange={() => setConfirmAgreement((prev) => !prev)}
                label={
                  <>
                    Я согласен с{" "}
                    <Link href="/agreement">Пользовательским соглашением</Link>{" "}
                    и <Link href="/privacy">Политикой конфиденциальности</Link>
                  </>
                }
              />
            </>
          )}
        </form>
      </div>
    </>
  )
}

export default AuthForm
