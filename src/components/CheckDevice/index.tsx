"use client"

import { ReactNode } from "react"
import { observer } from "mobx-react-lite"

import Header from "@/components/Header"
import ScreenStore from "@/store/ScreenStore"

interface ICheckDevice {
  children: ReactNode
}

const CheckDevice = observer(({ children }: ICheckDevice) => {
  const { isMobile } = ScreenStore

  return <>{isMobile ? <>{children}</> : <Header>{children}</Header>}</>
})

export default CheckDevice
