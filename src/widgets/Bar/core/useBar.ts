import { useMemo } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from '@entities/auth/hooks/useSession'

import { barLinks } from '../static/barLinks'

const useBar = () => {
  const { user } = useSession()

  const { nickname = '' } = user ?? {}

  const pathname = usePathname()
  const { push } = useRouter()

  const links = useMemo(() => barLinks(nickname), [nickname])

  const mainLinksConverted = useMemo(
    () =>
      links.map((link) => {
        const isSelected = pathname.includes(link.href)

        const onClick = () => {
          if (!isSelected) push(link.href)
        }

        return { ...link, onClick, isSelected }
      }),
    [links, pathname, push],
  )

  return { mainLinksConverted }
}

export { useBar }
