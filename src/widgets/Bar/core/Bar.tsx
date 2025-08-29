'use client'

import { memo } from 'react'
import { HoverIcon } from '@shared/ui/atoms/HoverIcon'

import { useBar } from './useBar'
import st from './Bar.module.scss'

const Bar = memo(() => {
  const { mainLinksConverted } = useBar()

  return (
    <div className={st.root}>
      {mainLinksConverted.map((link) => (
        <HoverIcon
          onClick={link.onClick}
          key={link.href}
          isSelected={link.isSelected}
          Icon={link.Icon}
        />
      ))}
    </div>
  )
})

Bar.displayName = 'Bar'

export { Bar }
