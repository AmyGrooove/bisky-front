import { createPostFetcher } from '@shared/utils/functions'

const createNewAccount = createPostFetcher('/auth/temporary', 'POST')
const createNewAccountAdapter = () => createNewAccount()

export { createNewAccountAdapter as createNewAccount }
