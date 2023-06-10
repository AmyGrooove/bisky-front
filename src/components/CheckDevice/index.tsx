"use client"

import { ReactNode } from "react"
import { observer } from "mobx-react-lite"

import { screenStore } from "@/store"

interface ICheckDevice {
  children: ReactNode
}

const CheckDevice = observer(({ children }: ICheckDevice) => {
  const { isMobile } = screenStore

  return <>{isMobile ? <>{children}</> : <>{children}</>}</>
})

export default CheckDevice
