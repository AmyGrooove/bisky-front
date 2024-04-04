"use client"

import { SessionProvider } from "next-auth/react"

import { IProvidersProps } from "../types/IProvidersProps"
import { ModalProvider } from "../../ModalProvider"

const Providers = (props: IProvidersProps) => {
  const { children } = props

  return (
    <SessionProvider>
      <ModalProvider>{children}</ModalProvider>
    </SessionProvider>
  )
}

export { Providers }
