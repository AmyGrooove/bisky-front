import { GoogleIcon, YandexIcon } from '@shared/icons'
import { ENV } from '@shared/static'

const integrationList = [
  {
    children: 'Соединить с Google',
    id: 'google' as 'google' | 'yandex',
    Icon: GoogleIcon,
    href: new URL(`/auth/google?type=link`, ENV.API_URL),
  },
  {
    children: 'Соединить с Яндекс ID',
    id: 'yandex' as 'google' | 'yandex',
    Icon: YandexIcon,
    href: new URL(`/auth/yandex?type=link`, ENV.API_URL),
  },
]

export { integrationList }
