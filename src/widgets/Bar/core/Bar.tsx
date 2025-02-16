'use client'

import Link from 'next/link'
import { cloneElement } from 'react'

import { cn } from '@shared/utils/functions'

import { barLinks } from '../static/barLinks'

import st from './Bar.module.scss'
import { useBar } from './useBar'


const Bar = () => {
  const { username, checkIsActive } = useBar()

  return (
    <div className={st.root}>
      {barLinks(username).map((link) => (
        <Link key={link.href} href={link.href}>
          {cloneElement(link.icon, {
            className: cn(st.linkIcon, {
              [st.linkIcon_active]: checkIsActive(link.href),
            }),
          })}
        </Link>
      ))}
    </div>
  )
}

export { Bar }
