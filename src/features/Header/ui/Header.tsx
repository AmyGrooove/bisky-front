"use client"

import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { useContext } from "react"

import { Text } from "@shared/ui/atoms/Text"
import { LogoIcon, SearchIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { LinkTabs } from "@shared/ui/molecules/LinkTabs"
import { Button } from "@shared/ui/molecules/Button"
import { PlaceholderImage } from "@shared/ui/atoms/PlaceholderImage"
import { Skeleton } from "@shared/ui/atoms/Skeleton"
import { ModalContext } from "@appData/mainLayout/ui/ModalProvider"

import { IHeaderProps } from "../types/IHeaderProps"

import st from "./Header.module.scss"
import { AuthBlock } from "./AuthBlock/AuthBlock"

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
            <Text size="44" weight="700" className={st.logoText}>
              Bisky
            </Text>
          </Link>
          <LinkTabs items={[{ name: "Каталог", href: "#" }]} />
        </div>
        <div className={st.rightSide}>
          <Button
            rightIcon={<SearchIcon className={st.searchIcon} />}
            className={st.searchButton}
            textProps={{ weight: "400", size: "20", className: st.searchText }}
          >
            Поиск
          </Button>
          {status === "loading" ? (
            <Skeleton className={st.avatar} />
          ) : session ? (
            <PlaceholderImage
              width={40}
              height={40}
              src={session?.avatar ?? ""}
              alt=""
              className={st.avatar}
              onClick={() => signOut({ redirect: false })}
            />
          ) : (
            <Button
              onClick={
                () => setModal(<AuthBlock />)
                // signIn("credentials", {
                //   username: "AmyGrooove",
                //   password: "AmyGrooove",
                //   redirect: false,
                // })
              }
            >
              Войти
            </Button>
          )}
        </div>
      </div>
    </>
  )
}

export { Header }
