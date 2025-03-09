import { z } from 'zod'

const temporarySchema = z.object({
  userID: z
    .string()
    .min(24, 'Неправильный ID пользователя')
    .max(24, 'Неправильный ID пользователя'),
})

export { temporarySchema }
