import { TListStatus } from '@entities/animeEstimate/types'

interface IAddInListButtonProps {
  _id: string

  selectedListStatus?: TListStatus | null
  className?: string
}

export type { IAddInListButtonProps }
