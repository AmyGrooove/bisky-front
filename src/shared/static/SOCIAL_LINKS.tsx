import { BoostyIcon, DiscordIcon, TelegramIcon, VKIcon } from '@shared/icons'

const SOCIAL_LINKS = [
  { href: '#', Icon: <TelegramIcon />, label: 'Telegram' },
  { href: '##', Icon: <DiscordIcon />, label: 'Discord' },
  { href: '###', Icon: <VKIcon />, label: 'VK' },
  { href: '####', Icon: <BoostyIcon />, label: 'Boosty' },
] as const

export { SOCIAL_LINKS }
