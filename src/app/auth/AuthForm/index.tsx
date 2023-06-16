"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEventHandler, useState } from "react"

import Checkbox from "@/components/Common/Checkbox"
import IconButton from "@/components/Common/IconButton"
import Input from "@/components/Common/Input"
import { ARROW, BACK, GOOGLE, SHIKIMORI, VK } from "@/constants"
import { cl } from "@/utils"

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
          {(showSignIn || showSignUp) && (
            <IconButton
              onClick={handleResetStates}
              iconName={BACK}
              size={24}
              className={styles.authForm__header__back}
            />
          )}
          <h3 className={styles.authForm__header__title}>Вход</h3>
        </div>
        <form onSubmit={handleSubmit} className={styles.authForm__form}>
          <Input
            variant="dark"
            right={
              !showSignIn &&
              !showSignUp && (
                <IconButton type="submit" iconName={ARROW} size={20} />
              )
            }
            placeholder="Имя пользователя"
            name="username"
            onChange={handleResetStates}
            required
            type="text"
            pattern="[a-zA-Z0-9]{3,15}"
            title="Имя должно быть длиною от 3 до 15 символов и состоять из цифр (0-9), строчных или заглавных букв (a-z, A-Z)."
          />
          {showSignIn && (
            <>
              <Input
                className={styles.authForm__form__input}
                variant="dark"
                right={<IconButton type="submit" iconName={ARROW} size={20} />}
                placeholder="Пароль"
                name="password"
                required
                type="password"
                pattern="[a-zA-Z0-9!$#]{6,15}"
                title="Пароль должно быть длиною от 6 до 15 символов и состоять из цифр (0-9), строчных или заглавных букв (a-z, A-Z) и символов (!, $, #)."
              />
            </>
          )}
          {showSignUp && (
            <>
              <Input
                className={styles.authForm__form__input}
                variant="dark"
                placeholder="Пароль"
                name="password"
                required
                type="password"
                pattern="[a-zA-Z0-9!$#]{6,15}"
                title="Пароль должно быть длиною от 6 до 15 символов и состоять из цифр (0-9), строчных или заглавных букв (a-z, A-Z) и символов (!, $, #)."
              />
              <Input
                className={styles.authForm__form__input}
                variant="dark"
                right={
                  confirmAgreement && (
                    <IconButton type="submit" iconName={ARROW} size={20} />
                  )
                }
                placeholder="Повторите пароль"
                name="confirmPassword"
                required
                type="password"
                pattern="[a-zA-Z0-9!$#]{6,15}"
                title="Пароль должно быть длиною от 6 до 15 символов и состоять из цифр (0-9), строчных или заглавных букв (a-z, A-Z) и символов (!, $, #)."
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
        {!showSignIn && !showSignUp && (
          <>
            <span>Или войти с помощью</span>
            <div className={styles.authForm__providers}>
              <IconButton iconName={GOOGLE} size={24} />
              <IconButton iconName={SHIKIMORI} size={24} disabled />
              <IconButton iconName={VK} size={24} disabled />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default AuthForm
