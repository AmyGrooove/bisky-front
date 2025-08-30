import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { redirect } from 'next/navigation'
import { useCallback } from 'react'

const useSearchButton = () => {
  const searchLink = '/search'

  const handleShortcut = useCallback(() => redirect(searchLink), [])

  useKeyboardShortcut({
    keys: ['k'],
    callback: handleShortcut,
    modifiers: ['ctrlKey'],
  })

  return { searchLink }
}

export { useSearchButton }
