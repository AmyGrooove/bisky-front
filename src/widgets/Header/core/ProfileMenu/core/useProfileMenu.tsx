import {
  useFloating,
  offset,
  useClick,
  useDismiss,
  useInteractions,
  flip,
  shift,
  useRole,
  autoUpdate,
  useTransitionStyles,
} from '@floating-ui/react'
import { useTransitionClose } from '@shared/utils/hooks/useTransitionClose'
import { successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

import { profileMenuLinks } from '../static/profileMenuLinks'

const isLoading = false // TODO
const user = { avatar: null, username: 'asdasdasd' } // TODO

const useProfileMenu = () => {
  const { avatar = null, username = '' } = user ?? {}

  const { isOpen, toggle } = useTransitionClose()

  const checkAndToggle = (isOpen: boolean) => {
    toggle(isOpen)
  }

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: checkAndToggle,
    placement: 'bottom-end',
    strategy: 'fixed',
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift(), offset(8)],
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context, { role: 'menu' }),
  ])

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 250,
    initial: { opacity: 0 },
    open: { opacity: 1 },
    close: { opacity: 0 },
  })

  const links = profileMenuLinks(username)

  const copyUsername = async () => {
    await navigator.clipboard.writeText(username)
    successToast({ Icon: UserIcon, message: 'Никнейм скопирован' })
  }

  return {
    avatar,
    getReferenceProps,
    getFloatingProps,
    refs,
    floatingStyles,
    username,
    copyUsername,
    isLoading,
    toggle,
    transitionStyles,
    isMounted,
    links,
  }
}

export { useProfileMenu }
