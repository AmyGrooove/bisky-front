"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"

import { Spinner } from "@/01-shared/ui/Spinner"
import { Button } from "@/01-shared/ui/Button"

import styles from "./RightSide.module.scss"

const RightSide = () => {
  // const session = await getServerSession(authOptions)
  const session = useSession()
  console.log(session)

  const variants = {
    loading: {
      href: "/",
      button: <Spinner color="white" size={14} />,
    },
    authenticated: {
      href: `/u/${session.data?.user?.username}`,
      button: "Профиль",
    },
    unauthenticated: {
      href: `/auth`,
      button: "Войти",
    },
  }

  return (
    <>
      <Link href={variants[session.status].href}>
        <Button className={styles.rightSide__login}>
          {variants[session.status].button}
        </Button>
      </Link>
    </>
  )
}

export { RightSide }
