import { GoogleIcon, VKColoredIcon, YandexIcon } from '@shared/icons'
import { ENV } from '@shared/static'

const OAUTH_LIST = [
  {
    children: 'Войти через Google',
    id: 'google',
    Icon: GoogleIcon,
    href: new URL(`/auth/google?type=auth`, ENV.API_URL),
  },
  {
    children: 'Войти через Яндекс ID',
    id: 'yandex',
    Icon: YandexIcon,
    href: new URL(`/auth/yandex?type=auth`, ENV.API_URL),
  },
  {
    children: 'Войти через VK ID',
    id: 'vk',
    Icon: VKColoredIcon,
    href: new URL(`/auth/vk?type=auth`, ENV.API_URL),
  },
] as const

export { OAUTH_LIST }
