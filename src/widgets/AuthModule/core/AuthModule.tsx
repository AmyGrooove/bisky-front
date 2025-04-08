import { FormProvider } from 'react-hook-form'

import { IAuthModuleProps } from '../types/IAuthModuleProps'

import st from './AuthModule.module.scss'
import { SelectAuthMethodTab } from './SelectAuthMethodTab/SelectAuthMethodTab'
import { PasswordAuthTab } from './PasswordAuthTab/PasswordAuthTab'
import { useAuthModule } from './useAuthModule'
import { SendToEmailTab } from './SendToEmailTab/SendToEmailTab'
import { CheckCodeTab } from './CheckCodeTab/CheckCodeTab'

const AuthModule = (props: IAuthModuleProps) => {
  const { authForm, currentTab, setCurrentTab, emailForm, successCallback } =
    useAuthModule(props)

  return (
    <FormProvider {...authForm}>
      <div className={st.root}>
        {currentTab === 0 && <SelectAuthMethodTab setNewTab={setCurrentTab} />}
        {currentTab === 1 && (
          <PasswordAuthTab
            setNewTab={setCurrentTab}
            successCallback={successCallback}
          />
        )}
        {currentTab === 2 && (
          <SendToEmailTab setNewTab={setCurrentTab} form={emailForm} />
        )}
        {currentTab === 3 && (
          <CheckCodeTab
            setNewTab={setCurrentTab}
            form={emailForm}
            successCallback={successCallback}
          />
        )}
      </div>
    </FormProvider>
  )
}

export { AuthModule }
