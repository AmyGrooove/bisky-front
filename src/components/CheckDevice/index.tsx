"use client"

import { ReactNode } from "react"
import { observer } from "mobx-react-lite"

import { screenStore } from "@/store"

import Header from "../Header"

interface ICheckDevice {
  children: ReactNode
}

const CheckDevice = observer(({ children }: ICheckDevice) => {
  const { isMobile } = screenStore

  return <>{false ? <>{children}</> : <Header>{children}</Header>}</>
})

export default CheckDevice
