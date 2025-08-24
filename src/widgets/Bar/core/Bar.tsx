'use client'

import { HoverIcon } from '@shared/ui/atoms/HoverIcon'

import { useBar } from './useBar'
import st from './Bar.module.scss'

const Bar = () => {
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
}

export { Bar }
