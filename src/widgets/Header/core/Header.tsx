'use client'

import Link from 'next/link'
import { Text } from '@shared/ui/atoms/Text'
import { LogoIcon } from '@shared/icons'
import { PageLink } from '@shared/ui/molecules/PageLink'
import { NotificationButton } from '@entities/notification/ui/NotificationButton'

import { useHeader } from './useHeader'
import st from './Header.module.scss'
import { ToolsMenu } from './ToolsMenu'
import { ProfileMenu } from './ProfileMenu'
import { SearchButton } from './SearchButton'

const Header = () => {
  const { mainLinksConverted, setIsToolsOpened } = useHeader()

  return (
    <div className={st.root}>
      <div className={st.leftSide}>
        <Link href="/" className={st.logoWrapper}>
          <LogoIcon className={st.logo} />
          <Text weight="700" className={st.logoText}>
            Bisky
          </Text>
        </Link>
        {mainLinksConverted.map((link) =>
          'href' in link ? (
            <Link href={link.href} key={link.name}>
              <PageLink
                variant="header"
                Icon={link.Icon}
                isSelected={link.isSelected}
              >
                {link.name}
              </PageLink>
            </Link>
          ) : (
            <ToolsMenu onOpenChange={setIsToolsOpened} key={link.name}>
              <PageLink
                variant="header"
                Icon={link.Icon}
                isSelected={link.isSelected}
                isChevronEnabled
              >
                {link.name}
              </PageLink>
            </ToolsMenu>
          ),
        )}
      </div>
      <div className={st.rightSide}>
        <SearchButton />
        <NotificationButton />
        <ProfileMenu />
      </div>
    </div>
  )
}

export { Header }
