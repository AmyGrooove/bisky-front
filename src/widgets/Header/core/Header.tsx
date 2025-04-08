'use client'

import Link from 'next/link'
import { Text } from '@shared/ui/atoms/Text'
import { LogoIcon } from '@shared/icons'

import st from './Header.module.scss'
import { useHeader } from './useHeader'
import { ProfileMenu } from './ProfileMenu/ProfileMenu'
import { SearchButton } from './SearchButton/SearchButton'

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
        <SearchButton />
        <ProfileMenu />
      </div>
    </div>
  )
}

export { Header }
