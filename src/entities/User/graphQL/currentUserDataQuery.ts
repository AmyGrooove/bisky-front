const currentUserDataQuery = {
  label: "$userQuery: GeneralUserQuery",
  query: `
    getUserPublicData(userQuery: $userQuery) {
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
  variables: (username: string) => ({
    userQuery: { filter: { username: username ?? null } },
  }),
}

export { currentUserDataQuery }
