import { useDeleteSession } from '@entities/user/api/deleteSession'
import { useGetUserSessions } from '@entities/user/api/getUserSessions'
import { useMemo } from 'react'

const useSessionManager = () => {
  const { data, isLoading } = useGetUserSessions()

  const { mutateAsync: deleteSession, isPending } = useDeleteSession()

  const currentSessions = useMemo(
    () => data?.find((session) => session.isCurrentDevice),
    [data],
  )
  const otherSessions = useMemo(
    () => data?.filter((session) => !session.isCurrentDevice),
    [data],
  )

  const deleteCurrentSession = async (refreshToken: string) => {
    if (isPending) return

    await deleteSession({ refreshToken })
  }

  return {
    currentSessions,
    otherSessions,
    isLoading,
    isPending,
    deleteCurrentSession,
  }
}

export { useSessionManager }
