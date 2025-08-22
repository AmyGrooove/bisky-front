import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { useRouter } from 'next/navigation'

const useSearchButton = () => {
  const { push } = useRouter()

  const handleClick = () => push('/search')

  useKeyboardShortcut({
    keys: ['k'],
    callback: handleClick,
    modifiers: ['ctrlKey'],
  })

  return { handleClick }
}

export { useSearchButton }
