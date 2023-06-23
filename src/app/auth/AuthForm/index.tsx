"use client"

import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEventHandler, useCallback, useState } from "react"

import { ArrowIcon, BackIcon, GoogleIcon, ShikimoriIcon, VkIcon } from "@/Icons"
import Checkbox from "@/components/Common/Checkbox"
import IconButton from "@/components/Common/IconButton"
import Input from "@/components/Common/Input"
import { cl } from "@/utils"
import { registerUser } from "@/services/auth"
import { getUserProfile } from "@/services"
import Spinner from "@/components/Common/Spinner"

import styles from "./index.module.scss"

interface IAuthForm {
  className?: string
}

const AuthForm = ({ className }: IAuthForm) => {
  const router = useRouter()

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/"

  const [isLoading, setIsLoading] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [confirmAgreement, setConfirmAgreement] = useState(false)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setIsLoading((prev) => !prev)

    const formData = new FormData(event.currentTarget)
    const username = formData.get("username")?.toString()

    try {
      if (!showSignIn && !showSignUp) {
        console.log("Проверка на существование юзернейма")

        if (username) {
          try {
            const res = await getUserProfile(username)
            if (res) {
              setShowSignIn((prev) => !prev)
            }
          } catch {
            setShowSignUp((prev) => !prev)
          } finally {
            return
          }
        }
      }

      if (showSignIn) {
        console.log("Это авторизация")

        const password = formData.get("password")?.toString()
        console.log(username, password)

        const res = await signIn("credentials", {
          username: username,
          password: password,
          redirect: false,
        })

        if (res && !res.error) {
          router.push(`/u/${username}`)
        } else {
          console.log(res)
        }
      } else if (showSignUp) {
        console.log("Это регистрация")

        const email = formData.get("email")?.toString()
        const password = formData.get("password")?.toString()
        const confirmPassword = formData.get("confirmPassword")?.toString()
        console.log(username, email, password, confirmPassword)

        if (email && password && username) {
          if (password !== confirmPassword) {
            throw new Error("There are different passwords")
          }

          await registerUser(username, password, email)

          const res = await signIn("credentials", {
            username: username,
            password: password,
            redirect: false,
          })

          if (res && !res.error) {
            router.push(`/u/${username}`)
          } else {
            console.log(res)
          }
        } else {
          throw new Error("Email, password, confirmPassword is not specified")
        }
      }
    } catch (error: any) {
      alert("Что-то пошло не так")
    } finally {
      setIsLoading((prev) => !prev)
    }
  }

  const handleResetStates = useCallback(() => {
    setShowSignIn(false)
    setShowSignUp(false)
    setConfirmAgreement(false)
  }, [])

  return (
    <>
      {isLoading && (
        <Spinner className={styles.loading} size={64} color="white" />
      )}
      <div
        className={cl(
          styles.authForm,
          className,
          isLoading && styles.authForm_loading,
        )}
      >
        <div className={styles.authForm__header}>
          {(showSignIn || showSignUp) && (
            <IconButton
              onClick={handleResetStates}
              icon={<BackIcon size={24} />}
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
              !showSignUp && <IconButton type="submit" icon={<ArrowIcon />} />
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
                right={<IconButton type="submit" icon={<ArrowIcon />} />}
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
                placeholder="Электронная почта"
                name="email"
                required
                type="email"
                inputMode="email"
                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Электронная почта должна быть валидной"
              />
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
                    <IconButton type="submit" icon={<ArrowIcon />} />
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
              <IconButton
                onClick={() => signIn("google", { callbackUrl })}
                icon={<GoogleIcon size={24} />}
              />
              <IconButton
                onClick={() => signIn("shikimori", { callbackUrl })}
                icon={<ShikimoriIcon size={24} />}
                disabled
              />
              <IconButton
                onClick={() => signIn("vk", { callbackUrl })}
                icon={<VkIcon size={24} />}
              />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default AuthForm
