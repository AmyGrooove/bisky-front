import { IAnimeInfo } from "@/types"

import graphqlClient from "./GraphQLClient"

export const getOneAnimeInfo = async (animeId: number) => {
  const response = await graphqlClient.makeRequest(`query getOneAnimeInfo {
    getOneAnime(id: ${animeId}) {
      anotherScores
      dates {
        aired_on
        released_on
      }
      description
      episodes {
        aired
        count
        duration
        next_episode_at
      }
      franshise {
        animes {
          anotherScores
          id
          kind
          labels
          poster
          relation {
            en
            ru
          }
          scores
          status
        }
        name
      }
      genres {
        id
        name {
          en
          ru
        }
        type
      }
      id
      kind
      labels
      poster
      rating
      scores
      screenshots
      status
      studios {
        id
        img
        name
      }
      updateDate
      videos
    }
  }`)

  if (!response.ok) {
    throw new Error("[getOneAnimeInfo] Failed to fetch data")
  }

  const { data } = await response.json()

  if (!data) {
    return null
  }

  const animeInfo: IAnimeInfo = data.getOneAnime

  return animeInfo
}
