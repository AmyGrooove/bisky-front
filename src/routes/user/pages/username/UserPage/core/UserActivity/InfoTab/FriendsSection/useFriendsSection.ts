import { useSession } from '@entities/auth/hooks/useSession'
import { useGetProfile } from '@entities/profile/api/getProfile'
import { useSubscribeToUser } from '@entities/user/api/subscribeToUser'
import { useUnsubscribeFromUser } from '@entities/user/api/unsubscribeFromUser'
import { isNil } from '@shared/utils/functions'
import { useParams } from 'next/navigation'

const useFriendsSection = () => {
  const { username } = useParams()

  const { user, isLoading: isWhoamiLoading } = useSession()

  const { data: currentProfileData, isLoading: isCurrentProfileDataLoading } =
    useGetProfile(String(user?.username), { enabled: !isNil(user?.username) })
  const { data: profileData, isLoading: isProfileDataLoading } = useGetProfile(
    String(username),
  )

  const { mutateAsync: subscribeToUser } = useSubscribeToUser()
  const { mutateAsync: unsubscribeFromUser } = useUnsubscribeFromUser()

  const isCurrentUser = profileData?.username === user?.username
  const isInFriend = !isNil(
    currentProfileData?.friends.find(
      (item) => item.username === profileData?.username,
    ),
  )
  const isLoading =
    isWhoamiLoading || isCurrentProfileDataLoading || isProfileDataLoading
  const isEmptyFriends = profileData?.friends.length === 0

  const addOrDeleteFriend = () => {
    if (isCurrentUser || isNil(profileData)) return

    if (isInFriend)
      unsubscribeFromUser({ subscriberUsername: profileData.username })
    else subscribeToUser({ subscriberUsername: profileData.username })
  }

  return {
    isCurrentUser,
    isLoading,
    profileData,
    isEmptyFriends,
    isInFriend,
    addOrDeleteFriend,
  }
}

export { useFriendsSection }
