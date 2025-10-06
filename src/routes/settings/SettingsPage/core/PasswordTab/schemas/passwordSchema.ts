import { z } from 'zod'

const passwordSchema = z
  .object({
    password: z.string().min(8, 'Размер пароля должен быть больше 8 символов'),
    retryPassword: z
      .string()
      .min(8, 'Размер пароля должен быть больше 8 символов'),
  })
  .refine(({ password, retryPassword }) => password === retryPassword, {
    path: ['retryPassword'],
    message: 'Пароли не совпадают',
  })

export { passwordSchema }
