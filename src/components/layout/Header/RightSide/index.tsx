"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"

import Button from "@/components/common/Button"
import Spinner from "@/components/common/Spinner"

import styles from "./index.module.scss"

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

export default RightSide
