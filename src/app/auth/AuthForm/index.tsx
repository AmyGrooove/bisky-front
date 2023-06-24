"use client"

import { signIn } from "next-auth/react"
import Link from "next/link"

import { ArrowIcon, BackIcon, GoogleIcon, ShikimoriIcon, VkIcon } from "@/Icons"
import Checkbox from "@/components/Common/Checkbox"
import IconButton from "@/components/Common/IconButton"
import Input from "@/components/Common/Input"
import Spinner from "@/components/Common/Spinner"
import { cl } from "@/utils"

import styles from "./index.module.scss"
import useAuthForm from "./index.use"

interface IAuthForm {
  className?: string
}

const AuthForm = ({ className }: IAuthForm) => {
  const {
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
                onClick={() => signIn("google")}
                icon={<GoogleIcon size={24} />}
              />
              <IconButton
                onClick={() => signIn("shikimori")}
                icon={<ShikimoriIcon size={24} />}
                disabled
              />
              <IconButton
                onClick={() => signIn("vk")}
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
