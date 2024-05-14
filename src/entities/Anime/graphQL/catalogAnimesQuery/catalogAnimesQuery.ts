import { ICatalogAnimesVariables } from "./ICatalogAnimesVariables"

const checkArray = (array: any[]) => (array.length === 0 ? null : array)

const catalogAnimesQuery = {
  label: "$animeQuery: GeneralAnimeQuery",
  query: `
    getAnimes(animeQuery: $animeQuery) {
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
  `,
  variables: (props: ICatalogAnimesVariables) => {
    const { page, dates_airedOn, filterInclude, filterExclude, sort } = props

    const newQuery = {
      count: 35,
      page,
      filterExclude: {
        kind: filterExclude.kind,
        rating: filterExclude.rating,
        status: filterExclude.status,
        genres_ID_ONLY: filterExclude.genres_ID_ONLY,
        studios_ID_ONLY: filterExclude.studios_ID_ONLY,
      },
      filter: {
        dates_airedOn: {
          from: (dates_airedOn.from ?? 1800) + "-01-01",
          to: (dates_airedOn.to ?? 2100) + "-01-01",
        },
        kind: checkArray(filterInclude.kind),
        rating: checkArray(filterInclude.rating),
        status: checkArray(filterInclude.status),
        genres_ID_ONLY: checkArray(filterInclude.genres_ID_ONLY),
        studios_ID_ONLY: checkArray(filterInclude.studios_ID_ONLY),
      },
      sort: {
        usersList_generalCount: sort === "scores" ? true : null,
        score_averageScore: sort === "scores" ? true : null,
        dates_airedOn: sort === "dates" ? true : null,
      },
    }

    return { animeQuery: newQuery }
  },
}

export { catalogAnimesQuery }
