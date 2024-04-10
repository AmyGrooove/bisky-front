"use client"

import { SessionProvider } from "next-auth/react"

import { IProvidersProps } from "../types/IProvidersProps"

const Providers = (props: IProvidersProps) => {
  const { children } = props

  return <SessionProvider>{children}</SessionProvider>
}

export { Providers }
