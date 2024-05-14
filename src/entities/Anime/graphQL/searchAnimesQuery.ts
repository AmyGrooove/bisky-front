const searchAnimesQuery = {
  label: "$animeQuery: GeneralAnimeQuery",
  query: `
    getAnimes(animeQuery: $animeQuery) {
      _id
      labels {
        en
        ru
      }
      poster
      episodes {
        airedCount
      }
      status
      kind
      dates {
        airedOn
      }
    }
  `,
  variables: (searchInput: string) => ({
    animeQuery: {
      count: 12,
      sort: { score_count: true, usersList_generalCount: true },
      isPaginationOff: true,
      searchInput,
    },
  }),
}

export { searchAnimesQuery }
