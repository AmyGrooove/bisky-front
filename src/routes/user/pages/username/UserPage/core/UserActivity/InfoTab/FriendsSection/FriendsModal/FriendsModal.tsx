import { IFriendsModalProps } from '../../../../../types/IFriendsModalProps'
import { useFriendsModal } from './useFriendsModal'
import st from './FriendsModal.module.scss'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import Link from 'next/link'
import { Text } from '@shared/ui/atoms/Text'
import { closeModal } from '@widgets/ModalWrapper'

const FriendsModal = (props: IFriendsModalProps) => {
  const { data } = useFriendsModal(props)

  return (
    <div className={st.root}>
      <Text weight="700" className={st.label}>
        Друзья
      </Text>
      <div className={st.friends}>
        {data.map((item) => (
          <Link
            href={`/user/${item.username}`}
            className={st.row}
            key={item.username}
            onClick={() => closeModal()}
          >
            <PlaceholderImage
              src={item.avatar}
              sizes={[80, 80]}
              className={st.avatar}
            />
            <Text maxLines={1} className={st.friendLabel}>
              {item.username}
            </Text>
          </Link>
        ))}
      </div>
    </div>
  )
}

export { FriendsModal }
