import { createPostFetcher } from '@shared/utils/functions'

const logout = createPostFetcher('/auth/logout', 'POST')
const logoutAdapter = () =>
  logout({ optionsPost: { tokenType: 'refreshToken' } })

export { logoutAdapter as logout }
