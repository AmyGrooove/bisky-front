import { ReactNode } from "react"

import { ClientProvider } from "./ClientProvider"

interface IProviders {
  children: ReactNode
}

const Providers = ({ children }: IProviders) => {
  return <ClientProvider>{children}</ClientProvider>
}

export { Providers }
