import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import { mainLinks } from '../static/mainLinks'

const useHeader = () => {
  const pathname = usePathname()
  const { push } = useRouter()

  const [isToolsOpened, setIsToolsOpened] = useState(false)

  const mainLinksConverted = mainLinks.map((link) => {
    if ('href' in link) {
      return { ...link, isSelected: pathname.includes(link.href ?? '') }
    }

    return { ...link, isSelected: isToolsOpened }
  })

  return { mainLinksConverted, push, setIsToolsOpened }
}

export { useHeader }
