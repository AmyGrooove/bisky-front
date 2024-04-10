import { IAnimeFullModel } from "@entities/Anime/types/IAnimeFullModel"
import { API_URL } from "@shared/constants"

const getNewSeriesAnimesQL = async (): Promise<IAnimeFullModel[]> => {
  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      query: `{
        getAnimes(
          animeQuery: { count: 24, sort: { episodes_lastEpisodeAiredDate: true } }
        ) {
          _id
          labels {
            en
            ru
          }
          poster
          score {
            averageScore
          }
          episodes {
            airedCount
          }
          status
          userData {
            animeStatus
            score
          }
          usersList {
            generalCount
            addedCount
          }
        }
      }`,
    }),
    next: { revalidate: 60 },
  })

  if (!result.ok) {
    throw new Error(`Failed to get best animes: ${result.statusText}`)
  }

  return (await result.json()).data.getAnimes
}

export { getNewSeriesAnimesQL }
