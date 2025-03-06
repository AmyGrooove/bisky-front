import { useMemo } from 'react'
import { useSession } from '@entities/auth/hooks/useSession'
import { useGetProfile } from '@entities/profile/api/getProfile'
import { useParams } from 'next/navigation'
import { badgeItems } from '../../../static/badgeItems'

const useListSection = () => {
  const { username } = useParams()

  const { user, isLoading: isWhoamiLoading } = useSession()

  const { data: profileData, isLoading: isProfileDataLoading } = useGetProfile(
    String(username),
  )
  const { animeEstimateData } = profileData ?? {}
  const {
    added = 0,
    dropped = 0,
    watching = 0,
    completed = 0,
  } = animeEstimateData ?? {}

  const isLoading = isWhoamiLoading || isProfileDataLoading

  const badgeElements = useMemo(
    () => badgeItems(added, watching, completed, dropped),
    [added, watching, completed, dropped],
  )

  const isCurrentUser = profileData?.username === user?.username
  const userListLink = `/user/${profileData?.username}/list`

  return {
    added,
    watching,
    completed,
    dropped,
    badgeElements,
    isCurrentUser,
    userListLink,
    isLoading,
  }
}

export { useListSection }
