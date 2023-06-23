"use client"

import Link from "next/link"

import { SettingsIcon } from "@/Icons"
import IconButton from "@/components/Common/IconButton"

interface ISettingsButton {
  username: string
}

const SettingsButton = ({ username }: ISettingsButton) => {
  return (
    <Link href={`/u/${username}/edit`}>
      <IconButton icon={<SettingsIcon />} />
    </Link>
  )
}

export default SettingsButton
