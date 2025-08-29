import { memo } from 'react'
import { FormProvider } from 'react-hook-form'

import { IAuthModalProps } from '../types/IAuthModalProps'

import st from './AuthModal.module.scss'
import { SelectAuthMethodTab } from './SelectAuthMethodTab/SelectAuthMethodTab'
import { PasswordAuthTab } from './PasswordAuthTab/PasswordAuthTab'
import { useAuthModal } from './useAuthModal'
import { SendToEmailTab } from './SendToEmailTab/SendToEmailTab'
import { CheckCodeTab } from './CheckCodeTab/CheckCodeTab'

const AuthModal = memo((props: IAuthModalProps) => {
  const { authForm, currentTab, setCurrentTab, emailForm, successCallback } =
    useAuthModal(props)

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
})

AuthModal.displayName = 'AuthModal'

export { AuthModal }
