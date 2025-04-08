import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import { closeAdditionalModal } from '@widgets/ModalWrapper'
import { cn, isNil } from '@shared/utils/functions'

import { IConfirmationModalProps } from '../types/IConfirmationModalProps'

import st from './ConfirmationModal.module.scss'
import { useConfirmationModal } from './useConfirmationModal'

const ConfirmationModal = (props: IConfirmationModalProps) => {
  const { handleCallback, title, yesButtonClassName, description } =
    useConfirmationModal(props)

  return (
    <div className={st.root}>
      <Text className={st.label} weight="700">
        {title}
      </Text>
      <div className={st.buttons}>
        <Button
          className={st.button}
          variant="big"
          onClick={() => closeAdditionalModal()}
        >
          Отмена
        </Button>
        <Button
          className={cn(st.button, st.button_active, yesButtonClassName)}
          variant="big"
          onClick={handleCallback}
        >
          Да
        </Button>
      </div>
      {!isNil(description) && (
        <Text className={st.infoText}>{description}</Text>
      )}
    </div>
  )
}

export { ConfirmationModal }
