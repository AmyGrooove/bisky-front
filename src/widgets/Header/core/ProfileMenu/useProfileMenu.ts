import {
  useFloating,
  offset,
  useClick,
  useDismiss,
  useInteractions,
  flip,
  shift,
} from '@floating-ui/react'

import { useSession } from '@entities/auth/hooks/useSession'
import { useTransitionClose } from '@shared/utils/hooks/useTransitionClose'
import { successToast } from '@shared/utils/toast'
import { UserIcon } from '@shared/icons'

const useProfileMenu = () => {
  const { user, isLoading } = useSession()
  const { avatar = null, username = '', isTemporary = true } = user ?? {}

  const { isOpen, isClosing, toggle } = useTransitionClose()

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-end',
    open: isOpen,
    onOpenChange: toggle,
    middleware: [flip(), shift(), offset(8)],
    transform: false,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ])

  const copyUsername = async () => {
    await navigator.clipboard.writeText(username)
    successToast({ Icon: UserIcon, message: 'Никнейм скопирован' })
  }

  return {
    avatar,
    getReferenceProps,
    getFloatingProps,
    refs,
    isOpen,
    floatingStyles,
    username,
    isClosing,
    isTemporary,
    copyUsername,
    isLoading,
    toggle,
  }
}

export { useProfileMenu }
