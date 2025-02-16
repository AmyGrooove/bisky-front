import { usePathname } from 'next/navigation'

import { useSession } from '@entities/auth'

const useBar = () => {
  const pathname = usePathname()

  const { user } = useSession()
  const { username = '' } = user ?? {}

  const checkIsActive = (value: string) => {
    if (value === '/') return pathname === '/'

    return pathname.includes(value)
  }

  return { username, checkIsActive }
}

export { useBar }
