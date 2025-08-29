import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

const useSearchButton = () => {
  const { push } = useRouter()

  const searchLink = '/search'

  const handleShortcut = useCallback(() => push(searchLink), [push])

  useKeyboardShortcut({
    keys: ['k'],
    callback: handleShortcut,
    modifiers: ['ctrlKey'],
  })

  return { searchLink }
}

export { useSearchButton }
