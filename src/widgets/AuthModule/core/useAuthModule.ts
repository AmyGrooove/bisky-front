import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { loginSchema } from '../schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { emailSchema } from '../schemas/emailSchema'

const useAuthModule = () => {
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

  return { authForm, currentTab, setCurrentTab, emailForm }
}

export { useAuthModule }
