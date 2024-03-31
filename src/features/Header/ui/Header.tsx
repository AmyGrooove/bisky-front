import Link from "next/link"

import { Text } from "@shared/ui/atoms/Text"
import { LogoIcon, SearchIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { LinkTabs } from "@shared/ui/molecules/LinkTabs"
import { Button } from "@shared/ui/molecules/Button"

import { IHeaderProps } from "../types/IHeaderProps"

import st from "./Header.module.scss"

const Header = (props: IHeaderProps) => {
  const { className, ...otherProps } = props

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <div className={st.leftSide}>
        <Link href="#" className={st.logoWrapper}>
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
        <Button>Войти</Button>
      </div>
    </div>
  )
}

export { Header }
