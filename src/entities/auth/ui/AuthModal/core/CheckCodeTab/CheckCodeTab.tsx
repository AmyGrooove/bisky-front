import { memo } from 'react'
import { Controller } from 'react-hook-form'
import { LogoIcon } from '@shared/icons'
import { cn, isNil } from '@shared/utils/functions'
import { Button } from '@shared/ui/molecules/Button'
import { Text } from '@shared/ui/atoms/Text'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { InputCode } from '@shared/ui/molecules/InputCode'

import { IEmailTabProps } from '../../types/IEmailTabProps'

import { useCheckCodeTab } from './useCheckCodeTab'
import st from './CheckCodeTab.module.scss'

const CheckCodeTab = memo((props: IEmailTabProps) => {
  const {
    setNewTab,
    sendCode,
    control,
    loginByCode,
    isError,
    isPending,
    timeLeft,
    isValid,
    error,
  } = useCheckCodeTab(props)

  return (
    <>
      <SectionLabel goBackClick={() => setNewTab(1)}>
        Вход через email
      </SectionLabel>
      <LogoIcon
        className={cn(st.logo, {
          [st.logo_loading]: isPending,
          [st.logo_error]: isError,
        })}
      />
      {!isNil(error?.message) && (
        <Text className={st.error}>{error.message}</Text>
      )}
      <form className={st.form}>
        <Controller
          control={control}
          name="code"
          render={({ field }) => (
            <InputCode {...field} length={6} className={st.input} />
          )}
        />
        <Button
          onClick={loginByCode}
          isDisabled={!isValid || isPending}
          className={st.button}
          variant="big"
        >
          Войти
        </Button>
      </form>
      {timeLeft > 0 ? (
        <Text
          className={st.timeLeft}
        >{`Повторно отправить через ${Math.ceil(timeLeft / 1000)} сек`}</Text>
      ) : (
        <button onClick={sendCode}>
          <Text weight="700" className={st.reset}>
            Отправить код ещё раз
          </Text>
        </button>
      )}
    </>
  )
})

CheckCodeTab.displayName = 'CheckCodeTab'

export { CheckCodeTab }
