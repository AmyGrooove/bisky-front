import { useCheckSessionInPage } from '@entities/auth/hooks/useCheckSessionInPage'

import { ISettingsLayoutProps } from '../types/ISettingsLayoutProps'

const useSettingsLayout = (props: ISettingsLayoutProps) => {
  const { children } = props

  const { isLoading } = useCheckSessionInPage()

  return { isLoading, children }
}

export { useSettingsLayout }
