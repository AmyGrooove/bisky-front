import { ENV } from '@shared/static'
import { apiFetchPost } from '@shared/utils/functions/apiFetch'

const setAvatar = async (file: FormData) => {
  const url = new URL(`/account/avatar`, ENV.API_URL)

  return apiFetchPost(url, 'PATCH', file)
}

export { setAvatar }
