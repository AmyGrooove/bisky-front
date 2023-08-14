import { graphqlClient } from "@/01-shared/libs/graphql"

import { AnimeInfoType, FilterType, SortType } from "../models"

const getAnimePages = async (
  page?: number,
  filter?: FilterType,
  sort?: SortType,
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

  const animePages: AnimeInfoType[] = data.getAnimePages

  return animePages
}

export { getAnimePages }
