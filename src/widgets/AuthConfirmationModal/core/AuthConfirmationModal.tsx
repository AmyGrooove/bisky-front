import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import { closeAdditionalModal } from '@widgets/ModalWrapper'
import st from './AuthConfirmationModal.module.scss'
import { cn } from '@shared/utils/functions'
import { useAuthConfirmationModal } from './useAuthConfirmationModal'
import { IAuthConfirmationModalProps } from '../types/IAuthConfirmationModalProps'

const AuthConfirmationModal = (props: IAuthConfirmationModalProps) => {
  const { handleCallback, copyID, isIDTextEnabled } =
    useAuthConfirmationModal(props)

  return (
    <div className={st.root}>
      <Text className={st.label} weight="700">
        Вы уверены, что хотите сменить аккаунт?
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
          isCustomColor
          className={cn(st.button, st.button_active)}
          variant="big"
          onClick={handleCallback}
        >
          Да
        </Button>
      </div>
      {isIDTextEnabled && (
        <Text className={st.infoText}>
          Аккаунт можно восстановить{' '}
          <strong onClick={copyID} className={st.link}>
            по ID
          </strong>{' '}
          в течение 3 месяцев, иначе он будет удалён
        </Text>
      )}
    </div>
  )
}

export { AuthConfirmationModal }
