"use client"

import { SessionProvider } from "next-auth/react"

import { ModalProvider } from "@widgets/ModalProvider"

import { IProvidersProps } from "../types/IProvidersProps"
import { Analytics } from "../../Analytics"

const Providers = (props: IProvidersProps) => {
  const { children } = props

  return (
    <SessionProvider>
      <ModalProvider>
        {children}
        <Analytics />
      </ModalProvider>
    </SessionProvider>
  )
}

export { Providers }
