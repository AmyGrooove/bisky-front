import { TListStatus } from '@entities/animeEstimate/types'

interface IAddInListModalProps {
  _id: string
  setStatus: (value: TListStatus | null) => void
  selectedListStatus: TListStatus | null
}

export type { IAddInListModalProps }
