import { IRootLayoutProps } from '../../../types/IRootLayoutProps'
import { useGetWhoami } from '@entities/auth/api/getWhoami'

const useAuthProvider = (props: IRootLayoutProps) => {
  const { children } = props

  useGetWhoami()

  return { children }
}

export { useAuthProvider }
