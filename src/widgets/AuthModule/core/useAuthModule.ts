import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { loginSchema } from '../schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'

const useAuthModule = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const authForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: 'all',
    defaultValues: { username: '', password: '' },
  })

  return { authForm, currentTab, setCurrentTab }
}

export { useAuthModule }
