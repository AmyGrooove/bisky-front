const newSeriesAnimesQuery = {
  label: "$newSeriesAnimesVariables: GeneralAnimeQuery",
  query: `
    newSeriesAnimes: getAnimes(animeQuery: $newSeriesAnimesVariables) {
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
    newSeriesAnimesVariables: {
      count: 24,
      sort: { episodes_lastEpisodeAiredDate: true },
      isPaginationOff: true,
      filterExclude: {
        kind: ["special", "music", "tv_special", "none", "pv", "cm"],
        rating: ["rx", "none", "g", "pg"],
        genres_ID_ONLY: ["664125f3fab099cd5adf415f"],
      },
    },
  },
}

export { newSeriesAnimesQuery }
