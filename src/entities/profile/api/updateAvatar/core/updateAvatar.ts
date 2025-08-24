import { createPostFetcher } from '@shared/utils/functions'

import { IUpdateAvatarBody } from '../types/IUpdateAvatarBody'

const updateAvatar = createPostFetcher('/account/username', 'PATCH')
const updateAvatarAdapter = (body: IUpdateAvatarBody) =>
  updateAvatar({ optionsPost: { body } })

export { updateAvatarAdapter as updateAvatar }
