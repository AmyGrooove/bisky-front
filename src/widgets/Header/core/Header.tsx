'use client'

import Link from 'next/link'

import { Text } from '@shared/ui/atoms/Text'
import { LogoIcon, SearchIcon } from '@shared/icons'

import st from './Header.module.scss'
import { useHeader } from './useHeader'
import { ProfileMenu } from './ProfileMenu/ProfileMenu'

const Header = () => {
  useHeader()

  return (
    <div className={st.root}>
      <Link href="/" className={st.logoWrapper}>
        <LogoIcon className={st.logo} />
        <Text weight="700" isCustomColor className={st.logoText}>
          Bisky
        </Text>
      </Link>
      <div className={st.rightSide}>
        <Link href="/search" className={st.searchButton}>
          <div className={st.searchLabel}>
            <SearchIcon className={st.searchIcon} isCustomColor />
            <Text className={st.searchText} isCustomColor>
              Поиск...
            </Text>
          </div>
          <Text className={st.hotKey} weight="700" isCustomColor>
            Ctrl + K
          </Text>
        </Link>
        <ProfileMenu />
      </div>
    </div>
  )
}

export { Header }
