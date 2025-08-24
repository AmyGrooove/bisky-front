import { createPostFetcher } from '@shared/utils/functions'

import { ILoginByTemporaryCodeBody } from '../types/ILoginByTemporaryCodeBody'

const loginByTemporaryCode = createPostFetcher('/auth/temporary/login', 'POST')
const loginByTemporaryCodeAdapter = (body: ILoginByTemporaryCodeBody) =>
  loginByTemporaryCode({ optionsPost: { body } })

export { loginByTemporaryCodeAdapter as loginByTemporaryCode }
