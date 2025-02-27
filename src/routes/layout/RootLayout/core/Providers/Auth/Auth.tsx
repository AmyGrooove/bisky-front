'use client'

import { useGetWhoami } from '@entities/auth/api/getWhoami'

const Auth = () => {
  useGetWhoami()

  return null
}

export { Auth }
