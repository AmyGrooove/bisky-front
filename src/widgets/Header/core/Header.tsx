'use client'

import Link from 'next/link'
import { Text } from '@shared/ui/atoms/Text'
import { LogoIcon } from '@shared/icons'
import { PageLink } from '@shared/ui/molecules/PageLink'
import { NotificationButton } from '@entities/notification/ui/NotificationButton'
import { memo } from 'react'

import { COLLECTIONS_LINK } from '../static/COLLECTIONS_LINK'
import { ANIME_PASS_LINK } from '../static/ANIME_PASS_LINK'
import { TOOLS_LINK } from '../static/TOOLS_LINK'

import { useHeader } from './useHeader'
import st from './Header.module.scss'
import { ToolsMenu } from './ToolsMenu'
import { ProfileMenu } from './ProfileMenu'
import { SearchButton } from './SearchButton'

const Header = memo(() => {
  const { checkIsSelected, isToolsOpened, guardLink, setIsToolsOpened } =
    useHeader()

  return (
    <div className={st.root}>
      <div className={st.leftSide}>
        <Link
          href="/"
          className={st.logoWrapper}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <LogoIcon className={st.logo} />
          <Text weight="700" className={st.logoText}>
            Bisky
          </Text>
        </Link>
        <Link href={COLLECTIONS_LINK.href}>
          <PageLink
            variant="header"
            Icon={COLLECTIONS_LINK.Icon}
            isSelected={checkIsSelected(COLLECTIONS_LINK.href)}
          >
            {COLLECTIONS_LINK.name}
          </PageLink>
        </Link>
        <ToolsMenu onOpenChange={setIsToolsOpened}>
          <PageLink
            variant="header"
            Icon={TOOLS_LINK.Icon}
            isSelected={isToolsOpened}
            isChevronEnabled
          >
            {TOOLS_LINK.name}
          </PageLink>
        </ToolsMenu>
        <Link {...guardLink(ANIME_PASS_LINK.href)}>
          <PageLink
            variant="header"
            Icon={ANIME_PASS_LINK.Icon}
            isSelected={checkIsSelected(ANIME_PASS_LINK.href)}
          >
            {ANIME_PASS_LINK.name}
          </PageLink>
        </Link>
      </div>
      <div className={st.rightSide}>
        <SearchButton />
        <NotificationButton />
        <ProfileMenu />
      </div>
    </div>
  )
})

Header.displayName = 'Header'

export { Header }
