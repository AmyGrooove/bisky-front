import { createPostFetcher } from '@shared/utils/functions'

import { IUpdateNicknameBody } from '../types/IUpdateNicknameBody'

const updateNickname = createPostFetcher('/account/nickname', 'PATCH')
const updateNicknameAdapter = (body: IUpdateNicknameBody) =>
  updateNickname({ optionsPost: { body } })

export { updateNicknameAdapter as updateNickname }
