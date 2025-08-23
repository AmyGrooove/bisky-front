import { usePathname, useRouter } from 'next/navigation'
import { useSession } from '@entities/auth/hooks/useSession'

import { barLinks } from '../static/barLinks'

const useBar = () => {
  const { user } = useSession()

  const { nickname = '' } = user ?? {}

  const pathname = usePathname()
  const { push } = useRouter()

  const mainLinksConverted = barLinks(nickname).map((link) => {
    const isSelected = pathname.includes(link.href)

    return {
      ...link,
      onClick: () => (isSelected ? {} : push(link.href)),
      isSelected,
    }
  })

  return { mainLinksConverted }
}

export { useBar }
