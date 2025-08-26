import { IFriendsModalProps } from '../types/IFriendsModalProps'

const useFriendsModal = (props: IFriendsModalProps) => {
  const { friendsData } = props

  return { friendsData }
}

export { useFriendsModal }
