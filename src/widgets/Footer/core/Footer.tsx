import Link from 'next/link'
import { LogoIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'

import { legal } from '../static/legal'

import st from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={st.root}>
      <div className={st.leftSide}>
        <div className={st.mainInfo}>
          <div className={st.logoWrapper}>
            <LogoIcon className={st.logo} isCustomColor />
            <Text weight="700" className={st.logoText}>
              Bisky
            </Text>
          </div>
          <Link href="mailto:help@bisky.one">
            <Text isCustomColor className={st.mail}>
              help@bisky.one
            </Text>
          </Link>
        </div>
        <Text isCustomColor className={st.privateText}>
          © 2025 Bisky. Все права защищены.
        </Text>
      </div>
      <div className={st.legalWrapper}>
        {legal.map(({ name, href }) => (
          <Link key={href} href={href}>
            <Text isCustomColor className={st.legalLink}>
              {name}
            </Text>
          </Link>
        ))}
      </div>
    </div>
  )
}

export { Footer }
