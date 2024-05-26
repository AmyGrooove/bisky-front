const currentUserDataQuery = {
  label: "$userQuery: GeneralUserQuery, $animeQuery: GeneralAnimeQuery",
  query: `
    getUserPublicData(userQuery: $userQuery, animeQuery: $animeQuery) {
      username
      userPersonalization {
        badge
        background
      }
      subscriptions {
        _id
        avatar
        username
      }
      role
      lastOnlineDate
      email
      avatar
      _id
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
        score
        status
        watchedSeries
      }
      animeList {
        addedCount
        completedCount
        droppedCount
        generalCount
        watchingCount
      }
    }
  `,
  variables: (username: string, page = 1) => ({
    userQuery: { filter: { username: username ?? null } },
    animeQuery: {
      isPaginationOff: false,
      page: page,
      count: 40,
      sort: { usersList_generalCount: true },
    },
  }),
}

export { currentUserDataQuery }
