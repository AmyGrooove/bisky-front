import { createPostFetcher } from '@shared/utils/functions'

import { IUpdateUsernameBody } from '../types/IUpdateUsernameBody'

const updateUsername = createPostFetcher('/account/username', 'PATCH')
const updateUsernameAdapter = (body: IUpdateUsernameBody) =>
  updateUsername({ optionsPost: { body } })

export { updateUsernameAdapter as updateUsername }
