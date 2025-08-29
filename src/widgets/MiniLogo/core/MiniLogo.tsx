import Link from 'next/link'
import { memo } from 'react'
import { LogoIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'

import st from './MiniLogo.module.scss'

const MiniLogo = memo(() => {
  return (
    <Link href="/" className={st.root}>
      <LogoIcon className={st.logo} />
      <Text weight="700" className={st.logoText}>
        Bisky
      </Text>
    </Link>
  )
})

MiniLogo.displayName = 'MiniLogo'

export { MiniLogo }
