import { sectionSelectorItems } from '@entities/animeEstimate/static'
import { TListStatus } from '@entities/animeEstimate/types'

const getCurrentEstimate = (value: TListStatus) =>
  ({
    added: sectionSelectorItems[0],
    watching: sectionSelectorItems[1],
    completed: sectionSelectorItems[2],
    dropped: sectionSelectorItems[3],
  })[value]

export { getCurrentEstimate }
