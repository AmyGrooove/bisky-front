"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"

import Button from "@/components/Common/Button"
import Spinner from "@/components/Common/Spinner"

import styles from "./index.module.scss"

const RightSide = () => {
  // const session = await getServerSession(authOptions)
  const session = useSession()

  const variants = {
    loading: {
      href: "/",
      button: <Spinner color="gray" />,
    },
    authenticated: {
      href: `/u/${session.data?.user?.name}`,
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

export default RightSide
