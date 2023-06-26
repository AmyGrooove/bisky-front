import { ReactNode } from "react"

import BottomNavigation from "../layout/BottomNavigation"
import Header from "../layout/Header"

import DeviceChecker from "./DeviceChecker"
import ClientProvider from "./ClientProvider"

interface IProviders {
  children: ReactNode
}

const Providers = ({ children }: IProviders) => {
  return (
    <ClientProvider>
      <DeviceChecker mobile={<BottomNavigation />} desktop={<Header />} />
      {children}
    </ClientProvider>
  )
}

export default Providers
