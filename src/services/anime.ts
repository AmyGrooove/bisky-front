import graphqlClient from "@/lib/graphqlClient"
import { IAnimeInfo } from "@/types"

export const getOneAnimeInfo = async (animeId: number) => {
  // if (typeof animeId !== "number") {
  //   throw new Error("[getOneAnimeInfo] 'animeId' is not a number")
  // }

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
            aired_on
            released_on
        }
        episodes {
            aired
            count
            duration
            next_episode_at
        }
        genres {
            hentai
            link_id {
                anime
                manga
            }
            name {
                en
                ru
            }
        }
        franshise {
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

  const animeInfo: IAnimeInfo = data.getOneAnime

  return animeInfo
}
