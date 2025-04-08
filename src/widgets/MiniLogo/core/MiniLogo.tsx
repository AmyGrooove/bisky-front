import Link from 'next/link'
import { LogoIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'

import st from './MiniLogo.module.scss'

const MiniLogo = () => {
  return (
    <Link href="/" className={st.root}>
      <LogoIcon className={st.logo} />
      <Text weight="700" isCustomColor className={st.logoText}>
        Bisky
      </Text>
    </Link>
  )
}

export { MiniLogo }
