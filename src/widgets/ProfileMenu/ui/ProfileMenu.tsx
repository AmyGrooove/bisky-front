import { useContext, useRef } from "react"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

import { cn } from "@shared/utils/functions"
import { ExitIcon, ProfileIcon, SettingsIcon } from "@shared/icons"
import {
  Dropdown,
  IDropdownRef,
  PlaceholderImage,
  Text,
} from "@shared/ui/atoms"
import { ModalContext } from "@widgets/ModalProvider"
import { SettingsBlock } from "@widgets/SettingsBlock"

import { IProfileMenuProps } from "../types/IProfileMenuProps"

import st from "./ProfileMenu.module.scss"

const ProfileMenu = (props: IProfileMenuProps) => {
  const { user, className, ...otherProps } = props

  const { data: session } = useSession()

  const { setModal } = useContext(ModalContext)

  const dropdownRef = useRef<IDropdownRef>(null)

  return (
    <Dropdown
      dropdownRef={dropdownRef}
      callComponent={
        <PlaceholderImage
          {...otherProps}
          width={300}
          height={300}
          src={user?.avatar ?? ""}
          alt=""
          className={cn(st.avatar, className)}
          imageClassName={st.avatarImage}
          quality={100}
          unoptimized
        />
      }
    >
      <div className={st.menu}>
        <div className={cn(st.menuRow, st.menuRow_noHover)}>
          <Text>{user.username}</Text>
        </div>
        <div className={st.divider} />
        <Link
          href={"/profile/" + session?.username}
          className={st.menuRow}
          onClick={dropdownRef.current?.closeMenu}
        >
          <Text>Профиль</Text>
          <ProfileIcon className={st.icon} />
        </Link>
        <div
          className={st.menuRow}
          onClick={() => {
            dropdownRef.current?.closeMenu()
            setModal(<SettingsBlock />)
          }}
        >
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
    </Dropdown>
  )
}

export { ProfileMenu }
