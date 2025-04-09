import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions/apiFetch'

const logout = async () => {
  const url = new URL(`/auth/logout`, ENV.API_URL)

  return apiFetchPost(url, 'POST')
}

export { logout }
