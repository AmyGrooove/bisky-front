import { isNil } from '@shared/utils/functions'
import { setModal } from '@widgets/ModalWrapper'
import { IDescriptionWrapperProps } from '../../../../types/IDescriptionWrapperProps'
import { Text } from '@shared/ui/atoms/Text'
import st from './DescriptionWrapper.module.scss'

const useDescriptionWrapper = (props: IDescriptionWrapperProps) => {
  const { description } = props

  const openDescription = () => {
    if (isNil(description)) return

    setModal(<Text className={st.modalText}>{description}</Text>)
  }

  return { description, openDescription }
}

export { useDescriptionWrapper }
