import { Text } from '@shared/ui/atoms/Text'
import { closeAdditionalModal, closeModal } from '@widgets/ModalWrapper'
import { LogoIcon } from '@shared/icons'
import Link from 'next/link'
import { Button } from '@shared/ui/molecules/Button'

import { legal } from '../static/legal'

import st from './Support.module.scss'

const Support = () => {
  return (
    <div className={st.root}>
      <div className={st.legalWrapper}>
        {legal.map(({ name, href }) => (
          <Link key={href} href={href}>
            <Button
              onClick={() => {
                closeModal()
                closeAdditionalModal()
              }}
              className={st.legalButton}
              variant="big"
            >
              {name}
            </Button>
          </Link>
        ))}
      </div>
      <div className={st.footer}>
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
    </div>
  )
}

export { Support }
