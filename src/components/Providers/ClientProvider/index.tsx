"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

import Modal from "../Modals"

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

export default ClientProvider
