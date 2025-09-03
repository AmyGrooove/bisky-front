import { z } from 'zod'

const profileSchema = z.object({
  nickname: z
    .string()
    .min(3, 'Размер ника должен быть больше 3 символов')
    .max(30, 'Размер ника должен быть меньше 30 символов'),
})

export { profileSchema }
