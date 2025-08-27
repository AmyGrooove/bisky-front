import { z } from 'zod'

const codeSchema = z.object({
  code: z.string().min(6),
})

export { codeSchema }
