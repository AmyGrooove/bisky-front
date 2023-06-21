"use client"

import { signOut } from "next-auth/react"

import Button from "@/components/Common/Button"

const Settings = () => {
  return (
    <div>
      <Button onClick={() => signOut({ callbackUrl: "/" })}>Выйти</Button>
    </div>
  )
}

export default Settings
