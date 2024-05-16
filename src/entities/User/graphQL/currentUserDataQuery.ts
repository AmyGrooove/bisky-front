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
    }
  `,
  variables: (username: string) => ({
    userQuery: { filter: { username: username ?? null } },
  }),
}

export { currentUserDataQuery }
