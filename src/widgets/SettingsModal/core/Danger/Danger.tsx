import st from './Danger.module.scss'
import { useDanger } from './useDanger'
import { LogOutIcon, UserXIcon } from '@shared/icons'
import { Button } from '@shared/ui/molecules/Button'
import { AuthConfirmationModal } from '@widgets/AuthConfirmationModal'
import { setAdditionalModal } from '@widgets/ModalWrapper'
import { Text } from '@shared/ui/atoms/Text'
import { ConfirmationModal } from '@shared/ui/organisms/ConfirmationModal'

const Danger = () => {
  const { logoutUserFromAccount } = useDanger()

  return (
    <div className={st.root}>
      <Text className={st.text}>
        В этом разделе собраны параметры, способные существенно повлиять на
        работу сайта и настройки вашего аккаунта
      </Text>
      <Button
        className={st.logOutButton}
        variant="big"
        Icon={LogOutIcon}
        onClick={() => setAdditionalModal(<AuthConfirmationModal />)}
      >
        Сменить аккаунт
      </Button>
      <div className={st.separator} />
      <Button
        className={st.logOutButton}
        variant="big"
        Icon={UserXIcon}
        onClick={() =>
          setAdditionalModal(
            <ConfirmationModal
              callBack={logoutUserFromAccount}
              title="Вы уверены, что хотите выйти из аккаунта?"
            />,
          )
        }
      >
        Выйти из аккаунта
      </Button>
    </div>
  )
}

export { Danger }
