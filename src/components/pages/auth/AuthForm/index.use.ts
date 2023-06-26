"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FormEventHandler, useCallback, useState } from "react"

import { registerUser } from "@/services/auth"
import { getUserProfile } from "@/services"

const useAuthForm = () => {
  const router = useRouter()

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
        const password = formData.get("password")?.toString()

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
        const email = formData.get("email")?.toString()
        const password = formData.get("password")?.toString()
        const confirmPassword = formData.get("confirmPassword")?.toString()

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

  return {
    isLoading,
    showSignIn,
    showSignUp,
    confirmAgreement,
    setConfirmAgreement,
    handleSubmit,
    handleResetStates,
  }
}

export default useAuthForm
