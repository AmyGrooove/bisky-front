"use client"

import { signOut } from "next-auth/react"

import Button from "@/components/common/Button"

interface ISettingsButton {}

const SignOutButton = () => {
  return <Button onClick={() => signOut({ callbackUrl: "/" })}>Выйти</Button>
}

export default SignOutButton
