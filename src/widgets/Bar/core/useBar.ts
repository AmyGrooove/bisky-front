import { useMemo } from 'react'
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

  const mainLinksConverted = useMemo(
    () =>
      links.map((link) => {
        const isSelected = pathname.includes(link.href)

        const onClick = () => {
          if (!isSelected) {
            guardCall(() => {
              redirect(link.href)
            })()
          }
        }

        return { ...link, onClick, isSelected }
      }),
    [links, pathname],
  )

  return { mainLinksConverted }
}

export { useBar }
