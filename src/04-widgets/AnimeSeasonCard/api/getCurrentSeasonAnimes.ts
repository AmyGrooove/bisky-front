import { graphqlClient } from "@/01-shared/libs/graphql"

import { AnimeSeasonType } from "../models"

const getCurrentSeasonAnimes = async () => {
  const { data } = await graphqlClient.makeRequest(`
    query GetAnimePages {
      getAnimePages(
        sort: { scores: true },
        filter: { status: ongoing, screenshotsCount: 5, airedOn: { from: "${
          new Date().getFullYear() - 1
        }" } }
      ) {
        id
        labels
        poster
        scores
        anotherScores
        screenshots
        genres {
          linkId {
            manga
            anime
          }
          name {
            ru
            en
          }
        }
      }
    }
  `)

  if (!data) {
    return null
  }

  const animeInfo: AnimeSeasonType[] = data.getAnimePages

  return animeInfo
}

export { getCurrentSeasonAnimes }
