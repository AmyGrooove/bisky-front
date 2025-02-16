import { TListStatus } from '../types'

const getEstimateColor = (value: TListStatus | null) => {
  if (value === null) return 'delete'

  return {
    added: 'added',
    watching: 'watching',
    completed: 'completed',
    dropped: 'dropped',
  }[value]
}

export { getEstimateColor }
