"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

import Modal from "../Modal"

interface IProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: IProvidersProps) => {
  return (
    <SessionProvider>
      <Modal>{children}</Modal>
    </SessionProvider>
  )
}
