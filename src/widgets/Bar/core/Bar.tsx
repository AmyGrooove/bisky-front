'use client'

import Link from 'next/link'

import { cn } from '@shared/utils/functions'

import { barLinks } from '../static/barLinks'

import st from './Bar.module.scss'
import { useBar } from './useBar'

const Bar = () => {
  const { username, checkIsActive } = useBar()

  return (
    <div className={st.root}>
      {barLinks(username).map(({ href, Icon }) => (
        <Link key={href} href={href}>
          {Icon({
            className: cn(st.linkIcon, {
              [st.linkIcon_active]: checkIsActive(href),
            }),
          })}
        </Link>
      ))}
    </div>
  )
}

export { Bar }
