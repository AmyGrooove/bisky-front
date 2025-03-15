import { z } from 'zod'

const codeSchema = z.object({
  code: z.string().min(6),
  newPassword: z.string().min(6, 'Размер пароля должен быть больше 6 символов'),
})

export { codeSchema }
