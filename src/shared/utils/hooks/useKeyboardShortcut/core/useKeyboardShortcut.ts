import { useEffect } from 'react'
import { useDebouncer } from '@shared/utils/hooks/useDebouncer'

import { IUseKeyboardShortcutProps } from '../types/IUseKeyboardShortcutProps'

const useKeyboardShortcut = (props: IUseKeyboardShortcutProps) => {
  const { keys, callback, modifiers } = props

  const { debounceCall, cancel } = useDebouncer(callback, 500)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const areModifiersPressed =
        modifiers?.length !== 0 || modifiers?.every((mod) => event[mod])
      const isKeyPressed = keys.includes(event.key?.toLowerCase())

      if (areModifiersPressed && isKeyPressed) {
        event.preventDefault()
        debounceCall()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      cancel()
    }
  }, [keys, modifiers, debounceCall, cancel])
}

export { useKeyboardShortcut }
