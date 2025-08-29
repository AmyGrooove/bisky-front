import Link from 'next/link'
import { memo } from 'react'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'
import { getProfileOnline } from '@entities/profile/functions/getProfileOnline'

import { IFriendsModalProps } from '../types/IFriendsModalProps'

import st from './FriendsModal.module.scss'
import { useFriendsModal } from './useFriendsModal'

const FriendsModal = memo((props: IFriendsModalProps) => {
  const { friendsData } = useFriendsModal(props)

  return (
    <div className={st.root}>
      {friendsData.map((friend) => (
        <Link
          href={`/profile/${friend.slug}`}
          className={st.friend}
          key={friend.slug}
        >
          <PlaceholderImage
            className={st.avatar}
            src={friend.avatar}
            alt={friend.nickname}
            sizes={[60, 60]}
          />
          <Text className={st.nickname}>{friend.nickname}</Text>
          <Text className={st.loggedAt}>
            {getProfileOnline(friend.loggedAt)}
          </Text>
        </Link>
      ))}
    </div>
  )
})

FriendsModal.displayName = 'FriendsModal'

export { FriendsModal }
