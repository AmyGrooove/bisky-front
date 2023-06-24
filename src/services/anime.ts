import graphqlClient from "@/lib/graphqlClient"
import { IAnimeInfo, IFilter, ISort } from "@/types"

export const getOneAnimeInfo = async (animeId: number) => {
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
            hentai
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

  const animeInfo: IAnimeInfo = data.getOneAnime

  return animeInfo
}

const ObjectToString = (obj: any) => {
  let array = []
  for (let prop in obj) {
    array.push(`${prop}: ${obj[prop]}`)
  }
  return array.toString()
}

export const getAnimePages = async (
  page?: number,
  filter?: IFilter,
  sort?: ISort,
  value?: string,
) => {
  let filterParams = []
  let sortParams = []

  if (filter) {
    for (let prop in filter) {
      if (prop === "airedOn") {
        let temp = `${prop}: {`
        for (let pprop in filter[prop]) {
          temp += `${pprop}: ${filter[prop]?.[pprop]}`
        }
        temp += "}"
        // filterParams.push(temp)
      } else if (prop === "genres" || prop === "studios") {
        filterParams.push(`${prop}: [${filter[prop]}]`)
      } else {
        filterParams.push(`${prop}: ${filter[prop]}`)
      }
    }
  }

  if (sort) {
    for (let prop in sort) {
      sortParams.push(`${prop}: ${sort[prop]}`)
    }
  }

  const filterQuery = filterParams.toString()
  const sortQuery = sortParams.toString()

  console.log(filterQuery)

  const { data } = await graphqlClient.makeRequest(`
    query GetAnimePages {
      getAnimePages(
        ${page ? `page: ${page}` : ""}
        ${filterQuery ? `filter: {${filterQuery}}` : ""}
        ${sortQuery ? `sort: {${sortQuery}}` : ""}
        ${value ? `value: "${value}"` : ""}
        ) {
        anotherScores
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
            hentai
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
        description
      }
    }
  `)

  if (!data) {
    return null
  }

  const animePages: IAnimeInfo[] = data.getAnimePages

  return animePages
}

export const getRandomFact = async () => {
  const { data } = await graphqlClient.makeRequest(`
    query GetRandomFact {
      getRandomFact
    }
  `)

  if (!data) {
    return null
  }

  const randomFact = data.getRandomFact

  return randomFact
}

export const getAllGenres = async () => {
  const { data } = await graphqlClient.makeRequest(`
    query GetAllGenres {
      getAllGenres {
        hentai
        linkId {
            anime
            manga
        }
        name {
            en
            ru
        }
      }
    }
  `)

  if (!data) {
    return null
  }

  const allGenres = data.getAllGenres

  return allGenres
}
