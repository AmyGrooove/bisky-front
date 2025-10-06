import { z } from 'zod'

const notificationsSchema = z.object({
  email: z.email('Невалидная почта'),
})

export { notificationsSchema }
