import { Text } from '@shared/ui/atoms/Text'
import Link from 'next/link'
import { ADDITIONAL_LINKS, SOCIAL_LINKS } from '@shared/static'
import { Button } from '@shared/ui/molecules/Button'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { cn } from '@shared/utils/functions'
import { LifeBuoyIcon } from '@shared/icons'

import { useSupportPage } from './useSupportPage'
import st from './SupportPage.module.scss'

const SupportPage = async () => {
  const { isMobile } = await useSupportPage()

  return (
    <div className={st.root}>
      {isMobile ? (
        <SectionLabel Icon={<LifeBuoyIcon />}>Поддержка</SectionLabel>
      ) : (
        <Text weight="700" className={st.label}>
          Поддержка
        </Text>
      )}
      <div className={st.supportWrapper}>
        <div className={st.buttonsWrapper}>
          {ADDITIONAL_LINKS[1].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={st.linkButtonWrapper}
            >
              <Button variant="small" className={st.linkButton}>
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
        <div className={st.buttonsWrapper}>
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(st.linkButtonWrapper, st.linkButtonWrapper_social)}
            >
              <Button variant="big" Icon={link.Icon} className={st.linkButton}>
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
        <div className={st.mail}>
          <Text>Почта:</Text>
          <Link className={st.link} href="mailto:support@bisky.one">
            support@bisky.one
          </Link>
        </div>
      </div>
    </div>
  )
}

export { SupportPage }
