import { useCallback, useMemo } from 'react'
import { redirect, usePathname } from 'next/navigation'
import { useSession } from '@entities/auth/hooks/useSession'
import { useAuthGate } from '@entities/auth/hooks/useAuthGate'

import { barLinks } from '../static/barLinks'

const useBar = () => {
  const { user } = useSession()
  const { nickname = '' } = user ?? {}

  const pathname = usePathname()

  const { guardCall } = useAuthGate()

  const links = useMemo(() => barLinks(nickname), [nickname])

  const checkIsActiveHref = useCallback(
    (value: string) => {
      if (value === '/') return pathname === '/'

      return pathname === value
    },
    [pathname],
  )

  const mainLinksConverted = useMemo(
    () =>
      links.map((link) => {
        const isSelected = checkIsActiveHref(link.href)

        const onClick = () => {
          if (!isSelected && link.href.includes('user')) {
            guardCall(() => {
              redirect(link.href)
            })()
          } else {
            redirect(link.href)
          }
        }

        return { ...link, onClick, isSelected }
      }),
    [links, pathname],
  )

  return { mainLinksConverted }
}

export { useBar }
