import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { Text } from '@shared/ui/atoms/Text'
import { UserIcon, UserXIcon } from '@shared/icons'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Button } from '@shared/ui/molecules/Button'
import Link from 'next/link'
import { Hint } from '@shared/ui/molecules/Hint'
import { setModal } from '@widgets/ModalWrapper'

import { useFriendsSection } from './useFriendsSection'
import st from './FriendsSection.module.scss'
import { FriendsModal } from './FriendsModal/FriendsModal'

const FriendsSection = () => {
  const {
    isCurrentUser,
    isLoading,
    profileData,
    isEmptyFriends,
    isInFriend,
    addOrDeleteFriend,
  } = useFriendsSection()

  if (isLoading) return <Skeleton className={st.loading} />

  if (isEmptyFriends && isCurrentUser) return null

  return (
    <div className={st.root}>
      {!isEmptyFriends && (
        <>
          <div
            onClick={() =>
              setModal(<FriendsModal data={profileData?.friends ?? []} />)
            }
          >
            <Text weight="700" className={st.label} isCustomColor>
              Друзья
            </Text>
          </div>
          <div className={st.friends}>
            {profileData?.friends.slice(0, 3).map((item) => (
              <Hint hintChildren={item.username} key={item.username}>
                <Link href={`/user/${item.username}`}>
                  <PlaceholderImage
                    src={item.avatar}
                    sizes={[50, 60]}
                    className={st.avatar}
                  />
                </Link>
              </Hint>
            ))}
            {profileData?.friends && profileData.friends.length > 3 && (
              <div
                onClick={() =>
                  setModal(<FriendsModal data={profileData?.friends ?? []} />)
                }
              >
                <Text weight="700" className={st.avatarPlus}>
                  {`+${profileData.friends.length - 3}`}
                </Text>
              </div>
            )}
          </div>
        </>
      )}
      {!isCurrentUser && (
        <Button
          Icon={isInFriend ? UserXIcon : UserIcon}
          onClick={addOrDeleteFriend}
          variant="big"
        >
          {isInFriend ? 'Удалить из друзей' : 'Добавить в друзья'}
        </Button>
      )}
    </div>
  )
}

export { FriendsSection }
