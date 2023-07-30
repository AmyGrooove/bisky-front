import { AnimeSeasonCardComponent } from "@/types"
import graphqlClient from "@/utils/graphqlClient"

const seasonCarouselService = async () => {
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
          hentai
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

  const animeInfo: AnimeSeasonCardComponent[] = data.getAnimePages

  return animeInfo
}

export default seasonCarouselService
