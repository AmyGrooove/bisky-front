import { useCallback, useMemo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { MENU_LINKS } from '../static/MENU_LINKS'

const useMobileHeader = () => {
  const { push } = useRouter()
  const pathname = usePathname()

  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const currentMenu = useMemo(
    () => MENU_LINKS.find(({ text }) => text === pathname)?.text ?? 'Главная',
    [pathname],
  )

  const handleMenuLinkClick = useCallback(
    (href: string) => {
      push(href)
      setIsMenuOpened(false)
    },
    [push, setIsMenuOpened],
  )

  const convertedMenuLinks = useMemo(
    () =>
      MENU_LINKS.map((link) => ({
        isSelected: link.text === currentMenu,
        text: link.text,
        onClick: () => handleMenuLinkClick(link.href),
        IconLeft: link.Icon,
      })),
    [currentMenu, handleMenuLinkClick],
  )

  return { currentMenu, isMenuOpened, convertedMenuLinks, setIsMenuOpened }
}

export { useMobileHeader }
