import { EKind, ERating, EStatus } from "@entities/Anime"

import { ICatalogAnimesVariables } from "./ICatalogAnimesVariables"

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
      count: 32,
      page,
      filter: {
        dates_airedOn: {
          from: (dates_airedOn.from ?? 1800) + "-01-01",
          to: (dates_airedOn.to ?? 2100) + "-01-01",
        },
        genres_ID_ONLY:
          filterInclude.genres_ID_ONLY.length !== 0
            ? filterInclude.genres_ID_ONLY
            : null,
        kind:
          filterInclude.kind.length !== 0
            ? filterInclude.kind
            : filterExclude.kind.length !== 0
              ? Object.values(EKind).filter(
                  (item) => !filterExclude.kind.includes(item),
                )
              : null,
        rating:
          filterInclude.rating.length !== 0
            ? filterInclude.rating
            : filterExclude.rating.length !== 0
              ? Object.values(ERating).filter(
                  (item) => !filterExclude.rating.includes(item),
                )
              : null,

        status:
          filterInclude.status.length !== 0
            ? filterInclude.status
            : filterExclude.status.length !== 0
              ? Object.values(EStatus).filter(
                  (item) => !filterExclude.status.includes(item),
                )
              : null,
        studios_ID_ONLY:
          filterInclude.studios_ID_ONLY.length !== 0
            ? filterInclude.studios_ID_ONLY
            : null,
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
