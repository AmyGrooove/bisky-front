import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import { MAIN_LINKS } from '../static/MAIN_LINKS'

const useHeader = () => {
  const pathname = usePathname()
  const { push } = useRouter()

  const [isToolsOpened, setIsToolsOpened] = useState(false)

  const mainLinksConverted = MAIN_LINKS.map((link) => {
    if ('href' in link) {
      return { ...link, isSelected: pathname.includes(link.href ?? '') }
    }

    return { ...link, isSelected: isToolsOpened }
  })

  return { mainLinksConverted, push, setIsToolsOpened }
}

export { useHeader }
