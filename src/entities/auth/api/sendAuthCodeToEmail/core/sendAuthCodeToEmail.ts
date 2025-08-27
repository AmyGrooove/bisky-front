import { createPostFetcher } from '@shared/utils/functions'

import { ISendAuthCodeToEmailBody } from '../types/ISendAuthCodeToEmailBody'

const sendAuthCodeToEmail = createPostFetcher('/auth/email', 'POST')
const sendAuthCodeToEmailAdapter = (body: ISendAuthCodeToEmailBody) =>
  sendAuthCodeToEmail({ optionsPost: { body } })

export { sendAuthCodeToEmailAdapter as sendAuthCodeToEmail }
