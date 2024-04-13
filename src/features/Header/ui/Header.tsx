"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"
import { useContext } from "react"

import { LogoIcon, SearchIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { ProfileMenu } from "@widgets/ProfileMenu"
import { AuthBlock } from "@widgets/AuthBlock"
import { Skeleton, Text } from "@shared/ui/atoms"
import { LinkTabs, Button } from "@shared/ui/molecules"
import { ModalContext } from "@widgets/ModalProvider"

import { IHeaderProps } from "../types/IHeaderProps"

import st from "./Header.module.scss"

const Header = (props: IHeaderProps) => {
  const { className, ...otherProps } = props

  const { data: session, status } = useSession()

  const { setModal } = useContext(ModalContext)

  return (
    <>
      <div {...otherProps} className={cn(st.root, className)}>
        <div className={st.leftSide}>
          <Link href="/" className={st.logoWrapper}>
            <LogoIcon className={st.logoIcon} />
            <Text
              size="44"
              weight="700"
              className={st.logoText}
              isDefaultColor={false}
            >
              Bisky
            </Text>
          </Link>
          <LinkTabs items={[{ name: "Каталог", href: "/catalog" }]} />
        </div>
        <div className={st.rightSide}>
          <Button
            rightIcon={<SearchIcon className={st.searchIcon} />}
            className={st.searchButton}
            onClick={() => setModal(<></>)}
            textProps={{ weight: "400", size: "20", className: st.searchText }}
          >
            Поиск
          </Button>
          {status === "loading" ? (
            <Skeleton className={st.avatar} />
          ) : session ? (
            <ProfileMenu user={session} />
          ) : (
            <Button onClick={() => setModal(<AuthBlock />)}>Войти</Button>
          )}
        </div>
      </div>
    </>
  )
}

export { Header }
