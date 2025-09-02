import {
  BlocksIcon,
  LockIcon,
  MailIcon,
  TriangleAlertIcon,
  UserIcon,
} from '@shared/icons'
import { ITabItem } from '@shared/ui/organisms/SectionSelector'

import { TSettingsSectionsValue } from '../types/TSettingsSectionsValue'

const SETTINGS_SECTIONS: ITabItem<TSettingsSectionsValue>[] = [
  { value: 'profile', children: 'Профиль', Icon: <UserIcon /> },
  { value: 'mail', children: 'Почта', Icon: <MailIcon /> },
  { value: 'password', children: 'Пароль', Icon: <LockIcon /> },
  { value: 'oauth', children: 'Интеграция', Icon: <BlocksIcon /> },
  { value: 'account', children: 'Аккаунт', Icon: <TriangleAlertIcon /> },
]

export { SETTINGS_SECTIONS }
