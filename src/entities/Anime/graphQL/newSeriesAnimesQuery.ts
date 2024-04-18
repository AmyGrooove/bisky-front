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
    },
  },
}

export { newSeriesAnimesQuery }
