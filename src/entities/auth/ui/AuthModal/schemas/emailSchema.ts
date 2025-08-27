import { z } from 'zod'

const emailSchema = z.object({ email: z.email('Невалидная почта') })

export { emailSchema }
