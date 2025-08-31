import {
  EyeIcon,
  PlayIcon,
  CheckIcon,
  BookMinusIcon,
  EyeOffIcon,
  CassetteTapeIcon,
} from '@shared/icons'

const ESTIMATE_DATA = {
  added: { Icon: <EyeIcon />, label: 'В список', currentLabel: 'В списке' },
  watching: { Icon: <PlayIcon />, label: 'Смотрю', currentLabel: 'Смотрю' },
  completed: {
    Icon: <CheckIcon />,
    label: 'Просмотрел',
    currentLabel: 'Просмотрено',
  },
  dropped: {
    Icon: <BookMinusIcon />,
    label: 'Бросил',
    currentLabel: 'Брошено',
  },
  delete: { Icon: <EyeOffIcon />, label: 'Удалить', currentLabel: 'Удалено' },
  noSelected: {
    Icon: <CassetteTapeIcon />,
    label: 'Выбрать',
    currentLabel: 'Выбрано',
  },
} as const

export { ESTIMATE_DATA }
