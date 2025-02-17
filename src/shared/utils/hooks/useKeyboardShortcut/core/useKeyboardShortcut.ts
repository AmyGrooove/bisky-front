'use client'

import { useEffect } from 'react'

import { IUseKeyboardShortcutProps } from '../types/IUseKeyboardShortcutProps'

const useKeyboardShortcut = (props: IUseKeyboardShortcutProps) => {
  const { keys, callback, modifiers } = props

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const areModifiersPressed = modifiers?.every((mod) => event[mod])

      const isKeyPressed = keys.includes(event.key.toLowerCase())

      if (areModifiersPressed && isKeyPressed) {
        event.preventDefault()
        callback()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [keys, modifiers, callback])
}

export { useKeyboardShortcut }
