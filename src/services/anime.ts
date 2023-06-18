import { IAnimeInfo } from "@/types"

import graphqlClient from "./GraphQLClient"

export const getOneAnimeInfo = async (animeId: number) => {
  const response = await graphqlClient.makeRequest(`query getOneAnimeInfo {
    getOneAnime(id: ${animeId}) {
      id
      labels
      poster  
      kind
      scores
      anotherScores
      status
      episodes {
        count
        aired
        duration
        next_episode_at
      }
      dates {
        aired_on
        released_on
      }
      rating
      description
      screenshots
      videos
      genres
      studios
      franshise {
        name
        animes {
          id
          relation {
            en
            ru
          }
        }
      }
      updateDate
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
