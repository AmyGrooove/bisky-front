import { createPostFetcher } from '@shared/utils/functions'

import { IUpdateEmailBody } from '../types/IUpdateEmailBody'

const updateEmail = createPostFetcher('/account/email', 'PATCH')
const updateEmailAdapter = (body: IUpdateEmailBody) =>
  updateEmail({ optionsPost: { body } })

export { updateEmailAdapter as updateEmail }
