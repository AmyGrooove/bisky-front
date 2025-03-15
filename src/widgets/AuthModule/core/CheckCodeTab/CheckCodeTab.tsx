import st from './CheckCodeTab.module.scss'
import { Controller } from 'react-hook-form'
import { useCheckCodeTab } from './useCheckCodeTab'
import { LogoIcon } from '@shared/icons'
import { cn } from '@shared/utils/functions'
import { IEmailTabProps } from '../../types/IEmailTabProps'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { Button } from '@shared/ui/molecules/Button'
import { InputCode } from '@shared/ui/atoms/InputCode'
import { Text } from '@shared/ui/atoms/Text'
import { InputField } from '@shared/ui/atoms/InputField'

const CheckCodeTab = (props: IEmailTabProps) => {
  const {
    setNewTab,
    sendReset,
    control,
    updatePasswordByCode,
    isError,
    isPending,
    timeLeft,
    isValid,
    error,
  } = useCheckCodeTab(props)

  return (
    <>
      <SectionLabel onClick={() => setNewTab(1)}>Сброс пароля</SectionLabel>
      <LogoIcon
        className={cn(st.logo, {
          [st.logo_loading]: isPending,
          [st.logo_error]: isError,
        })}
      />
      {error?.message && (
        <Text isCustomColor className={st.error}>
          {error.message}
        </Text>
      )}
      <Controller
        control={control}
        name="code"
        render={({ field }) => (
          <InputCode
            {...field}
            label="Введите код "
            length={6}
            isAutoFocus
            className={st.input}
          />
        )}
      />
      <Controller
        control={control}
        name="newPassword"
        render={({ field, fieldState }) => (
          <InputField
            {...field}
            className={st.input}
            type="password"
            placeholder="Новый пароль"
            errorText={fieldState.error?.message}
          />
        )}
      />
      <Button
        onClick={updatePasswordByCode}
        isDisabled={!isValid || isPending}
        className={st.button}
        variant="big"
      >
        Поменять пароль
      </Button>
      {timeLeft > 0 ? (
        <Text
          className={st.timeLeft}
        >{`Ждите ${Math.ceil(timeLeft / 1000)} сек`}</Text>
      ) : (
        <button onClick={sendReset}>
          <Text weight="700" isCustomColor className={st.reset}>
            Отправить код ещё раз
          </Text>
        </button>
      )}
    </>
  )
}

export { CheckCodeTab }
