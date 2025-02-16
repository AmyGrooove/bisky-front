import { IHistory } from '@entities/history/types'

interface IGetProfileHistoryResponse
  extends Pick<IHistory, 'type' | 'historyData' | 'updatedOn'> {}

export type { IGetProfileHistoryResponse }
