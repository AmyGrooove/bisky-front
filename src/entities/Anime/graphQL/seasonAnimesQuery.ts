const getPreviousSeasonDate = () => {
  const currentMonth = new Date().getMonth()
  const seasonsStartMonths = [11, 2, 5, 8]

  return new Date(
    new Date().getFullYear() - (currentMonth < 3 ? 1 : 0),
    seasonsStartMonths[Math.floor(currentMonth / 3)],
    1,
  )
}

const seasonAnimesQuery = {
  label: "$seasonAnimesVariables: GeneralAnimeQuery",
  query: `
    seasonAnimes: getAnimes(animeQuery: $seasonAnimesVariables) {
      _id
      labels {
        en
        ru
      }
      genres {
        name {
          en
          ru
        }
      }
      poster
      score {
        averageScore
      }
      screenshots
    }
  `,
  variables: {
    seasonAnimesVariables: {
      count: 15,
      limit: { screenshotsCount: 7 },
      sort: { score_count: true, usersList_generalCount: true },
      filter: {
        dates_airedOn: {
          from: `${getPreviousSeasonDate().getFullYear()}-${getPreviousSeasonDate().getMonth() + 1}-${getPreviousSeasonDate().getDate()}`,
        },
        status: "ongoing",
      },
      isPaginationOff: true,
      filterExclude: {
        kind: ["special", "music", "tv_special", "none", "pv", "cm"],
        rating: ["rx", "none", "g", "pg"],
        genres_ID_ONLY: ["664125f3fab099cd5adf415f"],
      },
    },
  },
}

export { seasonAnimesQuery }
