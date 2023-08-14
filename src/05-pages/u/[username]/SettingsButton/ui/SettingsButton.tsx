"use client"

import Link from "next/link"

import { IconButton } from "@/01-shared/ui/IconButton"
import { SettingsIcon } from "@/01-shared/ui/icons"

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

export { SettingsButton }
