import { createPostFetcher } from '@shared/utils/functions'

import { IConfirmCodeAndUpdatePasswordBody } from '../types/IConfirmCodeAndUpdatePasswordBody'

const confirmCodeAndUpdatePassword = createPostFetcher(
  '/account/password/reset',
  'PATCH',
)
const confirmCodeAndUpdatePasswordAdapter = (
  body: IConfirmCodeAndUpdatePasswordBody,
) => confirmCodeAndUpdatePassword({ optionsPost: { body } })

export {
  confirmCodeAndUpdatePasswordAdapter as confirmCodeAndUpdatePassword,
}
