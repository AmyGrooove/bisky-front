'use client'

import { useGetWhoami } from '@entities/auth/api/getWhoami'

const useSession = () => {
  const { data: user, isLoading } = useGetWhoami()

  return { user, isLoading }
}

export { useSession }
