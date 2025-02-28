import { isNil } from '@shared/utils/functions'
import { setAdditionalModal, setModal } from '@widgets/ModalWrapper'
import { Text } from '@shared/ui/atoms/Text'
import st from './DescriptionWrapper.module.scss'
import { IDescriptionWrapperProps } from '../types/IDescriptionWrapperProps'

const useDescriptionWrapper = (props: IDescriptionWrapperProps) => {
  const { description, isAdditionalModal = false } = props

  const openDescription = () => {
    if (isNil(description)) return

    if (isAdditionalModal)
      setAdditionalModal(<Text className={st.modalText}>{description}</Text>)
    else setModal(<Text className={st.modalText}>{description}</Text>)
  }

  return { description, openDescription }
}

export { useDescriptionWrapper }
