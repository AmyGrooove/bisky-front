import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { loginSchema } from '../schemas/loginSchema'
import { emailSchema } from '../schemas/emailSchema'
import { IAuthModuleProps } from '../types/IAuthModuleProps'

const useAuthModule = (props: IAuthModuleProps) => {
  const { successCallback } = props

  const [currentTab, setCurrentTab] = useState(0)

  const authForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: 'all',
    defaultValues: { username: '', password: '' },
  })

  const emailForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    mode: 'all',
    defaultValues: { email: '' },
  })

  return { authForm, currentTab, setCurrentTab, emailForm, successCallback }
}

export { useAuthModule }
