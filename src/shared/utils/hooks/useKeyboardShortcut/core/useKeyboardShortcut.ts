import { useEffect } from 'react'
import { useDebounce } from 'use-debounce'

import { IUseKeyboardShortcutProps } from '../types/IUseKeyboardShortcutProps'

const useKeyboardShortcut = (props: IUseKeyboardShortcutProps) => {
  const { keys, callback, modifiers } = props

  const [debouncedCallback] = useDebounce(callback, 500)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const areModifiersPressed =
        modifiers?.length !== 0 || modifiers?.every((mod) => event[mod])
      const isKeyPressed = keys.includes(event.key?.toLowerCase())

      if (areModifiersPressed && isKeyPressed) {
        event.preventDefault()
        debouncedCallback()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [keys, modifiers, debouncedCallback])
}

export { useKeyboardShortcut }
