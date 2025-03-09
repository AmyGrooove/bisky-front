import { z } from 'zod'

const passwordSchema = (isOldPasswordEnabled = false) =>
  z
    .object({
      oldPassword: !isOldPasswordEnabled ? z.string().optional() : z.string(),
      newPassword: z
        .string()
        .min(6, 'Размер пароля должен быть больше 6 символов'),
      newPasswordAgain: z
        .string()
        .min(6, 'Размер пароля должен быть больше 6 символов'),
    })
    .refine(
      (data) => {
        if (isOldPasswordEnabled) return data.oldPassword !== data.newPassword

        return true
      },
      {
        message: 'Новый пароль не может быть таким же, как старый',
        path: ['newPassword'],
      },
    )
    .refine((data) => data.newPassword === data.newPasswordAgain, {
      message: 'Пароли не совпадают',
      path: ['newPasswordAgain'],
    })

export { passwordSchema }
