import { GoogleIcon, YandexIcon } from '@shared/icons'
import { ENV } from '@shared/static'

const oauthList = [
  {
    children: 'Войти через Google',
    id: 'google' as 'google' | 'yandex',
    Icon: GoogleIcon,
    href: new URL(`/auth/google?type=auth`, ENV.API_URL),
  },
  {
    children: 'Войти через Яндекс ID',
    id: 'yandex' as 'google' | 'yandex',
    Icon: YandexIcon,
    href: new URL(`/auth/yandex?type=auth`, ENV.API_URL),
  },
]

export { oauthList }
