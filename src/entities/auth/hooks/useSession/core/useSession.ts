'use client'

import { useGetWhoami } from '@entities/auth/api/getWhoami'

const useSession = () => {
  const { data: user, isLoading, isError } = useGetWhoami()

  return { user, isLoading, isError }
}

export { useSession }
