import { z } from 'zod'

const idSchema = z.object({
  userID: z
    .string()
    .min(24, 'Неправильный ID пользователя')
    .max(24, 'Неправильный ID пользователя'),
})

export { idSchema }
