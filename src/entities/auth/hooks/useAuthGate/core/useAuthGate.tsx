import { MouseEvent, useCallback } from 'react'
import { setModal } from '@widgets/ModalWrapper'
import { NoAuthorizeModal } from '@entities/auth/ui/NoAuthorizeModal'
import { redirect } from 'next/navigation'
import { isNil } from '@shared/utils/functions'
import { useTopLoader } from 'nextjs-toploader'

import { TAnyFn } from '../types/TAnyFn'
import { useSession } from '../../useSession'

const useAuthGate = () => {
  const { isAuthenticated } = useSession()

  const { done } = useTopLoader()

  const guardCall = useCallback(
    <T extends any[]>(fn: TAnyFn<T>) =>
      async (...args: T) => {
        if (isAuthenticated) {
          return fn(...args)
        }

        setModal(<NoAuthorizeModal successCallback={() => fn(...args)} />)
      },
    [isAuthenticated],
  )

  const guardLink = useCallback(
    (href: string, onClick?: (event?: MouseEvent) => void | Promise<void>) => ({
      href,
      onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (event.defaultPrevented) return

        if (isAuthenticated) {
          if (!isNil(onClick)) onClick(event)

          return
        }

        setTimeout(() => done(true), 0)
        event.preventDefault()
        setModal(
          <NoAuthorizeModal
            successCallback={() => {
              if (!isNil(onClick)) onClick(event)
              redirect(href)
            }}
          />,
        )
      },
    }),
    [isAuthenticated],
  )

  return { guardCall, guardLink }
}

export { useAuthGate }
