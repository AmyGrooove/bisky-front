import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import { emailSchema } from '../schemas/emailSchema'

import { IAuthTabProps } from './IAuthTabProps'

interface IEmailTabProps extends IAuthTabProps {
  form: UseFormReturn<z.infer<typeof emailSchema>>
}

export type { IEmailTabProps }
