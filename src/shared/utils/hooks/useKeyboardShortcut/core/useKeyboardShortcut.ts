import { useEffect, useMemo } from 'react'
import { Debouncer } from '@tanstack/pacer'

import { IUseKeyboardShortcutProps } from '../types/IUseKeyboardShortcutProps'

const useKeyboardShortcut = (props: IUseKeyboardShortcutProps) => {
  const { keys, callback, modifiers } = props

  const debouncer = useMemo(
    () => new Debouncer(callback, { wait: 500 }),
    [callback],
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const areModifiersPressed =
        modifiers?.length !== 0 || modifiers?.every((mod) => event[mod])
      const isKeyPressed = keys.includes(event.key?.toLowerCase())

      if (areModifiersPressed && isKeyPressed) {
        event.preventDefault()
        debouncer.maybeExecute()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      debouncer.cancel()
    }
  }, [keys, modifiers, debouncer])
}

export { useKeyboardShortcut }
