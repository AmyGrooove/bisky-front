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
    },
  },
}

export { bestAnimesQuery }
