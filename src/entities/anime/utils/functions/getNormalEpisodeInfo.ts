import { isNil } from '@shared/utils/functions'

const getNormalEpisodeInfo = (
  airedCount: number | null,
  averageDuration: number | null,
) => {
  if (isNil(airedCount) && isNil(averageDuration)) return null

  if (!airedCount) return `серия по ~${averageDuration} мин.`
  if (!averageDuration) return `${airedCount} эп.`

  return `${airedCount} эп. по ~${averageDuration} мин.`
}

export { getNormalEpisodeInfo }
