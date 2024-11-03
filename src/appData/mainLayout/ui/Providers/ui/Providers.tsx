"use client"

import { SessionProvider } from "next-auth/react"

import { ModalProvider } from "@widgets/ModalProvider"

import { IProvidersProps } from "../types/IProvidersProps"
import { Analytics } from "../../Analytics"

import { useProviders } from "./useProviders"

const Providers = (props: IProvidersProps) => {
  const { children } = useProviders(props)

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
