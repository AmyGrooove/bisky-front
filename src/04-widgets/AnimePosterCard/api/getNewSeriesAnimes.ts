import { graphqlClient } from "@/01-shared/libs/graphql"

import { AnimePosterType } from "../models"

const getNewSeriesAnimes = async () => {
  const { data } = await graphqlClient.makeRequest(`
    query GetAnimePages {
      getAnimePages(
        sort: { scores: true, updateDate: true }
        filter: { labelCount: 1, score: 4 }
      ) {
        id
        labels
        scores
        anotherScores
        status
        episodes {
          aired
          count
          duration
          nextEpisodeAt
        }
      }
    }
  `)

  if (!data) {
    return null
  }

  const animeInfo: AnimePosterType[] = data.getAnimePages

  return animeInfo
}

export { getNewSeriesAnimes }
