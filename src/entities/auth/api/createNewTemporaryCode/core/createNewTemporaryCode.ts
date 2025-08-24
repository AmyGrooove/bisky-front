import { createPostFetcher } from '@shared/utils/functions'

const createNewTemporaryCode = createPostFetcher(
  '/auth/temporary/code',
  'PATCH',
)
const createNewTemporaryCodeAdapter = () => createNewTemporaryCode()

export { createNewTemporaryCodeAdapter as createNewTemporaryCode }
