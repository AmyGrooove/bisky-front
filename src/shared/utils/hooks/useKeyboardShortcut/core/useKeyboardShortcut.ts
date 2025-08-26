import { useEffect, useRef } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { IUseKeyboardShortcutProps } from '../types/IUseKeyboardShortcutProps'

const useKeyboardShortcut = (props: IUseKeyboardShortcutProps) => {
  const { keys, callback, modifiers } = props

  const callbackRef = useRef(callback)
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const keySet = new Set(keys.map((key) => key.toLowerCase()))

  const invoke = useDebouncedCallback(() => callbackRef.current(), 500)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return
      }

      if (event.repeat) return

      const mods = modifiers ?? []
      const modsOk =
        mods.length === 0 || mods.every((m) => (event as any)[m] === true)

      const keyOk =
        keySet.has(event.key.toLowerCase()) || keySet.has(event.code)

      if (modsOk && keyOk) {
        event.preventDefault()
        invoke()
      }
    }

    window.addEventListener('keydown', handleKeyDown, { passive: false })
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [keySet, modifiers, invoke])
}

export { useKeyboardShortcut }
