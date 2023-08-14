"use client"

import { signOut } from "next-auth/react"

import { Button } from "@/01-shared/ui/Button"

interface ISettingsButton {}

const SignOutButton = ({}: ISettingsButton) => {
  return <Button onClick={() => signOut({ callbackUrl: "/" })}>Выйти</Button>
}

export { SignOutButton }
