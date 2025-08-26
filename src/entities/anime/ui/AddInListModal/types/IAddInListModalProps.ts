import { ESTIMATE_DATA } from '@entities/anime/static/ESTIMATE_DATA'

interface IAddInListModalProps {
  animeID: string
  setStatus: (value: keyof typeof ESTIMATE_DATA) => void

  excludedListStatuses?: (keyof typeof ESTIMATE_DATA)[]
  selectedListStatus?: keyof typeof ESTIMATE_DATA
}

export type { IAddInListModalProps }
