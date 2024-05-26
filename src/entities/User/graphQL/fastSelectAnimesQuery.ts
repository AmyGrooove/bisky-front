const fastSelectAnimesQuery = {
  label: "$animeQuery: GeneralAnimeQuery, $userQuery: GeneralUserQuery",
  query: `
    getUserPublicData(animeQuery: $animeQuery, userQuery: $userQuery) {
      animeEstimates {
        base {
          _id
          studios
          status
          screenshots
          rating
          poster
          labels {
            en
            ru
          }
          kind
          genres
          description {
            en
            ru
          }
          episodes {
            duration
            airedCount
          }
        }
      }
    }
  `,
  variables: (username: string) => ({
    userQuery: { animeListStatus: "added", filter: { username: username } },
    animeQuery: {
      count: 20,
      sort: { score_count: true, score_averageScore: true },
    },
  }),
}

export { fastSelectAnimesQuery }
