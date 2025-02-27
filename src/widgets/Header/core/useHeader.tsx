import { SearchModule } from '@entities/search/ui/SearchModule'
import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { setModal } from '@widgets/ModalWrapper'

const useHeader = () => {
  useKeyboardShortcut({
    keys: ['k'],
    callback: () => setModal(<SearchModule />),
    modifiers: ['ctrlKey'],
  })
}

export { useHeader }
