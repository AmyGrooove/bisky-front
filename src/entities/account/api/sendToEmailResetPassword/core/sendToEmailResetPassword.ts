import { createPostFetcher } from '@shared/utils/functions'

import { ISendToEmailResetPasswordBody } from '../types/ISendToEmailResetPasswordBody'

const sendToEmailResetPassword = createPostFetcher(
  '/account/password/reset',
  'POST',
)
const sendToEmailResetPasswordAdapter = (body: ISendToEmailResetPasswordBody) =>
  sendToEmailResetPassword({ optionsPost: { body } })

export { sendToEmailResetPasswordAdapter as sendToEmailResetPassword }
