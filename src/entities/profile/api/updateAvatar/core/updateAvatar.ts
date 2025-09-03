import { createPostFetcher } from '@shared/utils/functions'

import { IUpdateAvatarBody } from '../types/IUpdateAvatarBody'

const updateAvatar = createPostFetcher('/account/avatar', 'PATCH')
const updateAvatarAdapter = (body: IUpdateAvatarBody) =>
  updateAvatar({ optionsPost: { file: body.file, isEmptyContentType: true } })

export { updateAvatarAdapter as updateAvatar }
