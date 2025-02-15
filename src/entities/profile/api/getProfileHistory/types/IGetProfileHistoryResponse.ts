import { IHistory } from '@entities/history'

interface IGetProfileHistoryResponse
  extends Pick<IHistory, 'type' | 'historyData' | 'updatedOn'> {}

export type { IGetProfileHistoryResponse }
