import { GoogleIcon, YandexIcon } from '@shared/icons'
import { ENV } from '@shared/static'

const integrationList = [
  {
    children: 'Соединить с Google',
    id: 'google' as 'google' | 'yandex',
    Icon: GoogleIcon,
    href: `${ENV.API_URL}/auth/google`,
  },
  {
    children: 'Соединить с Яндекс ID',
    id: 'yandex' as 'google' | 'yandex',
    Icon: YandexIcon,
    href: `${ENV.API_URL}/auth/yandex`,
  },
]

export { integrationList }
