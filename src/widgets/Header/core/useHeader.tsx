import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'

import { MAIN_LINKS } from '../static/MAIN_LINKS'

const useHeader = () => {
  const pathname = usePathname()

  const [isToolsOpened, setIsToolsOpened] = useState(false)

  const mainLinksConverted = useMemo(
    () =>
      MAIN_LINKS.map((link) => {
        if ('href' in link) {
          return { ...link, isSelected: pathname.includes(link.href ?? '') }
        }

        return { ...link, isSelected: isToolsOpened }
      }),
    [pathname, isToolsOpened],
  )

  return { mainLinksConverted, setIsToolsOpened }
}

export { useHeader }
