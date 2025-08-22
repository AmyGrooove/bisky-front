import { usePathname, useRouter } from 'next/navigation'

import { barLinks } from '../static/barLinks'

const user = { username: 'asdasdasd' } // TODO

const useBar = () => {
  const { username = '' } = user ?? {}

  const pathname = usePathname()
  const { push } = useRouter()

  const mainLinksConverted = barLinks(username).map((link) => {
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
