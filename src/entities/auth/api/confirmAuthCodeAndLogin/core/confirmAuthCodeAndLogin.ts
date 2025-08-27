import { createPostFetcher } from '@shared/utils/functions'

import { IConfirmAuthCodeAndLoginBody } from '../types/IConfirmAuthCodeAndLoginBody'

const confirmAuthCodeAndLogin = createPostFetcher('/auth/email/confirm', 'POST')
const confirmAuthCodeAndLoginAdapter = (body: IConfirmAuthCodeAndLoginBody) =>
  confirmAuthCodeAndLogin({ optionsPost: { body } })

export { confirmAuthCodeAndLoginAdapter as confirmAuthCodeAndLogin }
