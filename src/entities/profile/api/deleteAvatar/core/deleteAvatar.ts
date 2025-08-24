import { createPostFetcher } from '@shared/utils/functions'

const deleteAvatar = createPostFetcher('/account/avatar', 'DELETE')
const deleteAvatarAdapter = () => deleteAvatar()

export { deleteAvatarAdapter as deleteAvatar }
