import { Metadata } from 'next'
import { ENV } from '@shared/static'
import { getProfile } from '@entities/profile/api/getProfile'

import { IUserLayoutProps } from '../types/IUserLayoutProps'

const UserLayoutMetadata = async (
  props: IUserLayoutProps,
): Promise<Metadata> => {
  const { username } = await props.params

  try {
    const userData = await getProfile(username)

    const title = userData.username ?? ''

    return {
      title,
      openGraph: {
        title: title + ' | Bisky — Смотреть Аниме',
        url: `${ENV.APP_URL}/user/${userData.username}`,
        images: userData.avatar ?? '',
      },
    }
  } catch (_) {
    return {}
  }
}

export { UserLayoutMetadata }
