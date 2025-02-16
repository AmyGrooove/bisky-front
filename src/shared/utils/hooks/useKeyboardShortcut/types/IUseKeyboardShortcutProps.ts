type TModifierKey = 'ctrlKey' | 'shiftKey' | 'altKey' | 'metaKey'

interface IUseKeyboardShortcutProps {
  keys: string[]
  callback: () => void

  modifiers?: TModifierKey[]
}

export type { IUseKeyboardShortcutProps }
