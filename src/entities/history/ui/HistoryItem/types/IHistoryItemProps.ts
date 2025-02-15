import { getProfileHistory } from '@entities/profile'

interface IHistoryItemProps {
  data: Awaited<ReturnType<typeof getProfileHistory>>[number]

  variant?: 'big' | 'small'
  className?: string
}

export type { IHistoryItemProps }
