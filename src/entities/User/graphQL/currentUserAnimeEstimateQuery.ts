const currentUserAnimeEstimateQuery = {
  label: "$animeQuery: GeneralAnimeQuery, $userQuery: GeneralUserQuery",
  query: `
    getUserPublicData(animeQuery: $animeQuery, userQuery: $userQuery) {
      animeEstimates {
        score
        status
        watchedSeries
      }
    }
  `,
  variables: ({ animeId, userId }: { animeId?: string; userId?: string }) => ({
    animeQuery: { filter: { _id_ID: animeId ? [animeId] : null } },
    userQuery: { filter: { _id_ID: userId ?? null } },
  }),
}

export { currentUserAnimeEstimateQuery }
