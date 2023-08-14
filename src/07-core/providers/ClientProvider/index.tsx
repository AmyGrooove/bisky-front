"use client"

import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

import { Modal } from "@/01-shared/ui/Modal/ui/Modal"

interface IProviders {
  children: ReactNode
}

const ClientProvider = ({ children }: IProviders) => {
  return (
    <SessionProvider>
      <Modal>{children}</Modal>
    </SessionProvider>
  )
}

export { ClientProvider }
