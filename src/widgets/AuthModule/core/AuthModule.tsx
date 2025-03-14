import { FormProvider } from 'react-hook-form'
import st from './AuthModule.module.scss'
import { SelectAuthMethodTab } from './SelectAuthMethodTab/SelectAuthMethodTab'
import { PasswordAuthTab } from './PasswordAuthTab/PasswordAuthTab'
import { useAuthModule } from './useAuthModule'

const AuthModule = () => {
  const { authForm, currentTab, setCurrentTab } = useAuthModule()

  return (
    <FormProvider {...authForm}>
      <div className={st.root}>
        {currentTab === 0 && <SelectAuthMethodTab setNewTab={setCurrentTab} />}
        {currentTab === 1 && <PasswordAuthTab setNewTab={setCurrentTab} />}
      </div>
    </FormProvider>
  )
}

export { AuthModule }
