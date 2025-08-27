import Link from 'next/link'
import { Text } from '@shared/ui/atoms/Text'
import { LogoIcon } from '@shared/icons'
import { Divider } from '@shared/ui/atoms/Divider'
import { HoverIcon } from '@shared/ui/atoms/HoverIcon'
import { PageLink } from '@shared/ui/molecules/PageLink'

import { ADDITIONAL_LINKS } from '../static/ADDITIONAL_LINKS'
import { SOCIAL_LINKS } from '../static/SOCIAL_LINKS'

import st from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={st.root}>
      <div className={st.leftSide}>
        <div className={st.mainWrapper}>
          <Link href="/" className={st.logoWrapper}>
            <LogoIcon className={st.logo} />
            <Text weight="700" className={st.logoText}>
              Bisky
            </Text>
          </Link>
          <Text className={st.legalText}>
            © {new Date().getFullYear()} Bisky. Все права защищены
          </Text>
        </div>
        <div className={st.socialWrapper}>
          {SOCIAL_LINKS.map((social) => (
            <Link
              href={social.href}
              key={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HoverIcon Icon={social.Icon} variant="footerLink" />
            </Link>
          ))}
        </div>
      </div>
      <div className={st.rightSide}>
        <div className={st.additionalWrapper}>
          {ADDITIONAL_LINKS[0].map((link) => (
            <Link href={link.href} key={link.label}>
              <PageLink variant="footer">{link.label}</PageLink>
            </Link>
          ))}
        </div>
        <Divider variant="vertical" />
        <div className={st.additionalWrapper}>
          {ADDITIONAL_LINKS[1].map((link) => (
            <Link href={link.href} key={link.label}>
              <PageLink variant="footer">{link.label}</PageLink>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Footer }
