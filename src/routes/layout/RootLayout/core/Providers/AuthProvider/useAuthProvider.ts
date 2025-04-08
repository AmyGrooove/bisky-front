import { useGetWhoami } from '@entities/auth/api/getWhoami'

import { IRootLayoutProps } from '../../../types/IRootLayoutProps'

const useAuthProvider = (props: IRootLayoutProps) => {
  const { children } = props

  useGetWhoami()

  return { children }
}

export { useAuthProvider }
