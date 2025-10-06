import { Divider } from '@shared/ui/atoms/Divider'
import { InputField } from '@shared/ui/molecules/InputField'
import { Controller } from 'react-hook-form'
import { Button } from '@shared/ui/molecules/Button'
import { FileIcon } from '@shared/icons'

import { INotificationsTabProps } from '../types/INotificationsTabProps'

import st from './NotificationsTab.module.scss'
import { useNotificationsTab } from './useNotificationsTab'
import { Text } from '@shared/ui/atoms/Text'

const NotificationsTab = (props: INotificationsTabProps) => {
  const { control, isUpdateNicknameDisabled, data, sendForm } =
    useNotificationsTab(props)

  return (
    <>
      <Text className={st.description}>
        {data.protectionStatus === 'temporary'
          ? 'Укажите электронную почту для уведомлений, восстановления аккаунта и его преобразования в постоянный'
          : 'Укажите электронную почту для уведомлений и восстановления аккаунта'}
      </Text>
      <Divider />
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <InputField
            {...field}
            className={st.input}
            label="Почта"
            errorText={fieldState.error?.message}
            placeholder="Новая почта"
          />
        )}
      />
      <div className={st.submitButtonWrapper}>
        <Button
          isDisabled={isUpdateNicknameDisabled}
          onClick={sendForm}
          className={st.button}
          Icon={<FileIcon />}
        >
          Сохранить
        </Button>
      </div>
    </>
  )
}

export { NotificationsTab }
