import { z } from 'zod'

const loginSchema = z.object({
  username: z
    .string()
    .min(3, 'Размер имени должен быть больше 3 символов')
    .max(30, 'Размер имени должен быть меньше 30 символов'),
  password: z.string().min(8, 'Размер пароля должен быть больше 8 символов'),
})

export { loginSchema }
