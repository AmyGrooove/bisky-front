import { createPostFetcher } from '@shared/utils/functions'

const deleteSession = createPostFetcher('/auth/session/delete', 'DELETE')
const deleteSessionAdapter = () =>
  deleteSession({ optionsPost: { tokenType: 'refreshToken' } })

export { deleteSessionAdapter as deleteSession }
