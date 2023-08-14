import { AnimeEpisodesType } from "../models"

const formatEpisodes = (episodes: AnimeEpisodesType | undefined): string => {
  if (episodes === undefined) {
    return ""
  }

  let result = ""

  if (episodes.aired) {
    result += `${episodes.aired}/`
  }

  if (episodes.count) {
    result += `${episodes.count} эпизодов`
  }

  if (episodes.duration) {
    result += ` (${episodes.duration} мин.)`
  }

  return result
}

export { formatEpisodes }
