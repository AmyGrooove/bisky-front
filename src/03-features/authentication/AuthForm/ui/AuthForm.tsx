"use client"

import Link from "next/link"
import { signIn } from "next-auth/react"

import { Checkbox } from "@/01-shared/ui/Checkbox"
import { IconButton } from "@/01-shared/ui/IconButton"
import { Input } from "@/01-shared/ui/Input"
import { Spinner } from "@/01-shared/ui/Spinner"
import {
  ArrowIcon,
  BackIcon,
  GoogleIcon,
  ShikimoriIcon,
  VkIcon,
} from "@/01-shared/ui/icons"
import { cl } from "@/01-shared/utils"
import { Button } from "@/01-shared/ui/Button"
import { Divider } from "@/01-shared/ui/Divider"

import { useAuthForm } from "../lib"

import styles from "./AuthForm.module.scss"

interface IAuthForm {
  className?: string
}

const AuthForm = ({ className }: IAuthForm) => {
  const {
    formTitle,
    isLoading,
    showSignIn,
    showSignUp,
    confirmAgreement,
    setConfirmAgreement,
    handleSubmit,
    handleResetStates,
  } = useAuthForm()

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
          <h3 className={styles.authForm__header__title}>{formTitle}</h3>
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
                    <Link href="/agreement" className={styles.authForm__link}>
                      Пользовательским соглашением
                    </Link>{" "}
                    и{" "}
                    <Link href="/privacy" className={styles.authForm__link}>
                      Политикой конфиденциальности
                    </Link>
                  </>
                }
              />
            </>
          )}
        </form>
        {!showSignIn && !showSignUp && (
          <>
            <Divider
              className={styles.authForm__providers__header}
              label="Или"
            />
            <div className={styles.authForm__providers}>
              <Button
                variant="filled"
                onClick={() => signIn("google")}
                className={styles.authForm__providers__item}
              >
                Войти с помощью Google
                <GoogleIcon size={16} />
              </Button>
              <Button
                variant="filled"
                onClick={() => signIn("shikimori")}
                className={styles.authForm__providers__item}
              >
                Войти с помощью Shikimori
                <ShikimoriIcon size={16} />
              </Button>
              <Button
                variant="filled"
                onClick={() => signIn("vk")}
                className={styles.authForm__providers__item}
              >
                Войти с помощью VK
                <VkIcon size={16} />
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export { AuthForm }
