import { z } from 'zod'

const loginByTemporaryCodeSchema = z.object({
  temporaryCode: z
    .string()
    .min(24, 'Неправильный ключ пользователя')
    .max(24, 'Неправильный ключ пользователя'),
})

export { loginByTemporaryCodeSchema }
