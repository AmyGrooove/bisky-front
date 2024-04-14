const currentUserAnimesQuery = {
  label: "$animeQuery: GeneralAnimeQuery, $userQuery: GeneralUserQuery",
  query: `
    getUserPublicData(animeQuery: $animeQuery, userQuery: $userQuery) {
      animeEstimates {
        base {
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
      }
    }
  `,
  variables: {
    animeQuery: { sort: { episodes_lastEpisodeAiredDate: true } },
    userQuery: { animeListStatus: "watching" },
  },
}

export { currentUserAnimesQuery }
