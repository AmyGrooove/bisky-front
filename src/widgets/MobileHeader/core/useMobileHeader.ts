import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { MENU_LINKS } from '../static/MENU_LINKS'

const useMobileHeader = () => {
  const { push } = useRouter()
  const pathname = usePathname()

  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const currentMenu =
    MENU_LINKS.find(({ text }) => text === pathname)?.text ?? 'Главная'

  const convertedMenuLinks = MENU_LINKS.map((link) => ({
    isSelected: link.text === currentMenu,
    text: link.text,
    onClick: () => push(link.href),
    IconLeft: link.Icon,
  }))

  return { currentMenu, isMenuOpened, convertedMenuLinks, setIsMenuOpened }
}

export { useMobileHeader }
