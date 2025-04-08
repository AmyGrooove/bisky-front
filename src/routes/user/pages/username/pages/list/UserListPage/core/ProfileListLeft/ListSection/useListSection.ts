import { useMemo } from 'react'
import { useGetProfile } from '@entities/profile/api/getProfile'
import { useParams } from 'next/navigation'

import { badgeItems } from '../../../static/badgeItems'

const useListSection = () => {
  const { username } = useParams()

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

  const isLoading = isProfileDataLoading

  const badgeElements = useMemo(
    () => badgeItems(added, watching, completed, dropped),
    [added, watching, completed, dropped],
  )

  return {
    added,
    watching,
    completed,
    dropped,
    badgeElements,
    isLoading,
  }
}

export { useListSection }
