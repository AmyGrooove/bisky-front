import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { useRouter } from 'next/navigation'

const useSearchButton = () => {
  const { push } = useRouter()

  const searchLink = '/search'

  useKeyboardShortcut({
    keys: ['k'],
    callback: () => push(searchLink),
    modifiers: ['ctrlKey'],
  })

  return { searchLink }
}

export { useSearchButton }
