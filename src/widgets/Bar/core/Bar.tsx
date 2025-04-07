'use client'

import { cn } from '@shared/utils/functions'

import st from './Bar.module.scss'
import { useBar } from './useBar'

const Bar = () => {
  const { checkIsActive, isHidden, openTab, links } = useBar()

  return (
    <div className={cn(st.root, { [st.root_hidden]: isHidden })}>
      {links.map(({ href, Icon }) => (
        <button key={href} onClick={() => openTab(href)}>
          {Icon({
            className: cn(st.linkIcon, {
              [st.linkIcon_active]: checkIsActive(href),
            }),
          })}
        </button>
      ))}
    </div>
  )
}

export { Bar }
