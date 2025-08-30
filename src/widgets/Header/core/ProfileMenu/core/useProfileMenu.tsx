import {
  useFloating,
  offset,
  useClick,
  useDismiss,
  useInteractions,
  flip,
  shift,
  autoUpdate,
  useTransitionStyles,
} from '@floating-ui/react'
import { useTransitionClose } from '@shared/utils/hooks/useTransitionClose'
import { successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'
import { useSession } from '@entities/auth/hooks/useSession'
import { useCallback, useMemo } from 'react'
import { useAuthGate } from '@entities/auth/hooks/useAuthGate'

import { profileMenuLinks } from '../static/profileMenuLinks'

const useProfileMenu = () => {
  const { user, isLoading: isSessionLoading } = useSession()
  const { avatar = null, nickname = '' } = user ?? {}

  const { isOpen, toggle } = useTransitionClose()

  const { guardCall } = useAuthGate()

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: guardCall(toggle),
    placement: 'bottom-end',
    strategy: 'fixed',
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift(), offset(8)],
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
  ])

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 250,
    initial: { opacity: 0 },
    open: { opacity: 1 },
    close: { opacity: 0 },
  })

  const links = useMemo(() => profileMenuLinks(nickname), [nickname])

  const copyUsername = useCallback(async () => {
    await navigator.clipboard.writeText(nickname)
    successToast({ Icon: UserIcon, message: 'Никнейм скопирован' })
  }, [nickname])

  return {
    avatar,
    getReferenceProps,
    getFloatingProps,
    refs,
    floatingStyles,
    nickname,
    copyUsername,
    isSessionLoading,
    toggle,
    transitionStyles,
    isMounted,
    links,
  }
}

export { useProfileMenu }
