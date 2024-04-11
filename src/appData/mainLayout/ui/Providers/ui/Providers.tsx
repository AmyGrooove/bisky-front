"use client"

import { SessionProvider } from "next-auth/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <SpeedInsights />
      </ModalProvider>
    </SessionProvider>
  )
}

export { Providers }
