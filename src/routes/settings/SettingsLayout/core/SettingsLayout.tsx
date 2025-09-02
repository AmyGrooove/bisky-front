'use client'

import { ISettingsLayoutProps } from '../types/ISettingsLayoutProps'

import { useSettingsLayout } from './useSettingsLayout'

const SettingsLayout = (props: ISettingsLayoutProps) => {
  const { children } = useSettingsLayout(props)

  return <>{children}</>
}

export { SettingsLayout }
