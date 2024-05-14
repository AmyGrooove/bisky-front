const bestAnimesQuery = {
  label: "$bestAnimesVariables: GeneralAnimeQuery",
  query: `
    bestAnimes: getAnimes(animeQuery: $bestAnimesVariables) {
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
  variables: {
    bestAnimesVariables: {
      count: 48,
      sort: { score_count: true, usersList_generalCount: true },
      isPaginationOff: true,
      filterExclude: {
        kind: ["special", "music", "tv_special", "none", "pv", "cm"],
        rating: ["rx", "none", "g", "pg"],
        genres_ID_ONLY: ["664125f3fab099cd5adf415f"],
      },
    },
  },
}

export { bestAnimesQuery }
