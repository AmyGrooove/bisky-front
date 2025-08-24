import { createPostFetcher } from '@shared/utils/functions'

import { IUpdatePasswordBody } from '../types/IUpdatePasswordBody'

const updatePassword = createPostFetcher('/account/password', 'PATCH')
const updatePasswordAdapter = (body: IUpdatePasswordBody) =>
  updatePassword({ optionsPost: { body } })

export { updatePasswordAdapter as updatePassword }
