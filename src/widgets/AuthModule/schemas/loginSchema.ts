import { z } from 'zod'

const loginSchema = z.object({
  username: z
    .string()
    .min(3, 'Размер ника должен быть больше 3 символов')
    .max(30, 'Размер ника должен быть меньше 30 символов'),
  password: z.string().min(6, 'Размер пароля должен быть больше 6 символов'),
})

export { loginSchema }
