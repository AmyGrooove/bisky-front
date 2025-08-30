import { usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'
import { useAuthGate } from '@entities/auth/hooks/useAuthGate'

const useHeader = () => {
  const pathname = usePathname()

  const { guardLink } = useAuthGate()

  const [isToolsOpened, setIsToolsOpened] = useState(false)

  const checkIsSelected = useCallback(
    (href: string) => pathname.includes(href),
    [pathname],
  )

  return { checkIsSelected, isToolsOpened, guardLink, setIsToolsOpened }
}

export { useHeader }
