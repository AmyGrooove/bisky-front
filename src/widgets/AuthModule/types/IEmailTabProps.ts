import { UseFormReturn } from 'react-hook-form'
import { IAuthTabProps } from './IAuthTabProps'
import { z } from 'zod'
import { emailSchema } from '../schemas/emailSchema'

interface IEmailTabProps extends IAuthTabProps {
  form: UseFormReturn<z.infer<typeof emailSchema>>
}

export type { IEmailTabProps }
