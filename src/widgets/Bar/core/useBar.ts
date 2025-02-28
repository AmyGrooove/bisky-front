import { usePathname } from 'next/navigation'

import { useSession } from '@entities/auth/hooks/useSession'
import { hiddenLinks } from '../static/hiddenLinks'

const useBar = () => {
  const pathname = usePathname()

  const { user } = useSession()
  const { username = '' } = user ?? {}

  const checkIsActive = (value: string) => {
    if (!pathname) return false

    if (value === '/') return pathname === '/'

    return pathname === value
  }

  const isHidden = hiddenLinks.includes(pathname)

  return { username, checkIsActive, isHidden }
}

export { useBar }
