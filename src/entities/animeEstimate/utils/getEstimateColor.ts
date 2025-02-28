import { TListStatus } from '../types'

const getEstimateColor = (value: TListStatus | 'skipped' | null) => {
  if (value === null) return 'delete'

  return {
    added: 'added',
    watching: 'watching',
    completed: 'completed',
    dropped: 'dropped',
    skipped: 'skipped',
  }[value]
}

export { getEstimateColor }
