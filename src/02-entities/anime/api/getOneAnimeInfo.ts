import { graphqlClient } from "@/shared/libs/graphql"

import { AnimeInfoType } from "../models"

const getOneAnimeInfo = async (animeId: number) => {
  const { data } = await graphqlClient.makeRequest(`
    query GetOneAnime {
      getOneAnime(id: ${animeId}) {
        anotherScores
        description
        id
        kind
        labels
        poster
        rating
        scores
        screenshots
        status
        updateDate
        videos
        dates {
          airedOn
          releasedOn
        }
        episodes {
          aired
          count
          duration
          nextEpisodeAt
        }
        franchise {
          name
          animes {
            anotherScores
            id
            kind
            labels
            poster
            scores
            status
            relation {
              en
              ru
            }
          }
        }
        genres {
          linkId {
            anime
            manga
          }
          name {
            en
            ru
          }
        }
        studios {
          id
          img
          name
        }
      }
    }
  `)

  if (!data) {
    return null
  }

  const animeInfo: AnimeInfoType = data.getOneAnime

  return animeInfo
}

export { getOneAnimeInfo }
