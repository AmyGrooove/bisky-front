"use client"

import { useState } from "react"
import { signOut } from "next-auth/react"

import { PlaceholderImage } from "@shared/ui/atoms/PlaceholderImage"
import { cn } from "@shared/utils/functions"
import { Text } from "@shared/ui/atoms/Text"
import { ExitIcon, ProfileIcon, SettingsIcon } from "@shared/icons"

import { IProfileMenuProps } from "../types/IProfileMenuProps"

import st from "./ProfileMenu.module.scss"

const ProfileMenu = (props: IProfileMenuProps) => {
  const { user, className, ...otherProps } = props

  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const [isMenuClosing, setIsMenuClosing] = useState(false)

  const closeMenu = () => {
    setIsMenuClosing(true)

    setTimeout(() => {
      setIsMenuOpened(false)
      setIsMenuClosing(false)
    }, 100)
  }

  return (
    <>
      <div
        className={cn(st.background, { [st.background_opened]: isMenuOpened })}
        onClick={closeMenu}
      />
      <div {...otherProps} className={cn(st.root, className)}>
        <PlaceholderImage
          width={40}
          height={40}
          src={user?.avatar ?? ""}
          alt=""
          className={st.avatar}
          onClick={() => (isMenuOpened ? closeMenu() : setIsMenuOpened(true))}
        />
        {isMenuOpened && (
          <div className={cn(st.menu, { [st.menu_closing]: isMenuClosing })}>
            <div className={cn(st.menuRow, st.menuRow_noHover)}>
              <Text>{user.username}</Text>
            </div>
            <div className={st.divider} />
            <div className={st.menuRow}>
              <Text>Профиль</Text>
              <ProfileIcon className={st.icon} />
            </div>
            <div className={st.menuRow}>
              <Text>Настройки</Text>
              <SettingsIcon className={st.icon} />
            </div>
            <div className={st.divider} />
            <div
              className={st.menuRow}
              onClick={() => signOut({ redirect: false })}
            >
              <Text isDefaultColor={false} className={st.exitText}>
                Выйти
              </Text>
              <ExitIcon className={cn(st.icon, st.icon_exit)} />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export { ProfileMenu }
