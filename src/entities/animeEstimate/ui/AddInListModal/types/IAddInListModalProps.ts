import { TListStatus } from '@entities/animeEstimate/types'

interface IAddInListModalProps {
  _id: string
  setStatus: (value: TListStatus | null) => void

  excludedListStatuses?: (TListStatus | null)[]
  selectedListStatus?: TListStatus | null
}

export type { IAddInListModalProps }
