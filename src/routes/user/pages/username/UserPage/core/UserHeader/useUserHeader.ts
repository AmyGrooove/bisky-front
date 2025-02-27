import { formatLastOnline } from '@shared/utils/functions'
import { IUserSectionProps } from '../../types/IUserSectionProps'

const useUserHeader = (props: IUserSectionProps) => {
  const {
    data: { avatar, username, lastOnlineOn },
  } = props

  const convertedLastOnline = formatLastOnline(lastOnlineOn)

  return { avatar, username, convertedLastOnline }
}

export { useUserHeader }
