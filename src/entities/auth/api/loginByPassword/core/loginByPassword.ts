import { createPostFetcher } from '@shared/utils/functions'

import { ILoginByPasswordBody } from '../types/ILoginByPasswordBody'

const loginByPassword = createPostFetcher('/auth/login', 'POST')
const loginByPasswordAdapter = (body: ILoginByPasswordBody) =>
  loginByPassword({ optionsPost: { body } })

export { loginByPasswordAdapter as loginByPassword }
