'use client'

import { SettingsIcon } from '@shared/icons'
import { BigButton } from '@shared/ui/molecules/BigButton'
import Link from 'next/link'

import st from './SettingsButton.module.scss'
import { useSettingsButton } from './useSettingsButton'

const SettingsButton = () => {
  const { guardLink } = useSettingsButton()

  return (
    <Link {...guardLink('/settings')} className={st.buttonLink}>
      <BigButton className={st.button} variant="big" Icon={<SettingsIcon />}>
        Настройки
      </BigButton>
    </Link>
  )
}

export { SettingsButton }
