import { useRouter } from 'next/navigation'

import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'

const useHeader = () => {
  const { push } = useRouter()

  useKeyboardShortcut({
    keys: ['k'],
    callback: () => push('/search'),
    modifiers: ['ctrlKey'],
  })
}

export { useHeader }
