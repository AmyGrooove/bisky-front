import { usePathname, useRouter } from 'next/navigation'
import { useSession } from '@entities/auth/hooks/useSession'
import { useCallNoAuthorize } from '@widgets/NoAuthorize'

import { hiddenLinks } from '../static/hiddenLinks'
import { barLinks } from '../static/barLinks'

const useBar = () => {
  const pathname = usePathname()
  const { push } = useRouter()

  const { user } = useSession()
  const { username = '' } = user ?? {}

  const openNoAuthorize = useCallNoAuthorize()

  const checkIsActive = (value: string) => {
    if (!pathname) return false

    if (value === '/') return pathname === '/'

    return pathname === value
  }

  const isHidden = hiddenLinks.includes(pathname)

  const links = barLinks(username)

  const openTab = (href: string) => {
    if ([links[0].href, links[1].href].includes(href)) {
      push(href)
      return
    }

    openNoAuthorize({ thenCallback: () => push(href) })
  }

  return { checkIsActive, isHidden, openTab, links }
}

export { useBar }
