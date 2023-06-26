"use client"

import Link from "next/link"

import IconButton from "@/components/common/IconButton"
import { SettingsIcon } from "@/components/icons"

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
