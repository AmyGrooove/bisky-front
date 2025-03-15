import { FormProvider } from 'react-hook-form'
import st from './AuthModule.module.scss'
import { SelectAuthMethodTab } from './SelectAuthMethodTab/SelectAuthMethodTab'
import { PasswordAuthTab } from './PasswordAuthTab/PasswordAuthTab'
import { useAuthModule } from './useAuthModule'
import { SendToEmailTab } from './SendToEmailTab/SendToEmailTab'
import { CheckCodeTab } from './CheckCodeTab/CheckCodeTab'

const AuthModule = () => {
  const { authForm, currentTab, setCurrentTab, emailForm } = useAuthModule()

  return (
    <FormProvider {...authForm}>
      <div className={st.root}>
        {currentTab === 0 && <SelectAuthMethodTab setNewTab={setCurrentTab} />}
        {currentTab === 1 && <PasswordAuthTab setNewTab={setCurrentTab} />}
        {currentTab === 2 && (
          <SendToEmailTab setNewTab={setCurrentTab} form={emailForm} />
        )}
        {currentTab === 3 && (
          <CheckCodeTab setNewTab={setCurrentTab} form={emailForm} />
        )}
      </div>
    </FormProvider>
  )
}

export { AuthModule }
