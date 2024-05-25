const oneFranchiseQuery = {
  label:
    "$franchiseQuery: GeneralFranchiseQuery, $animeQuery: GeneralAnimeQuery",
  query: `
    getFranchises(franchiseQuery: $franchiseQuery, animeQuery: $animeQuery) {
      shikiId
      relatedWorks {
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
      name {
        en
        ru
      }
      description {
        en
        ru
      }
      _id
    }
  `,
  variables: (franchiseId: string) => ({
    franchiseQuery: { filter: { _id: [franchiseId] } },
    animeQuery: {
      sort: { dates_airedOn: true },
      count: 100,
      isPaginationOff: true,
      limit: { screenshotsCount: 4 },
    },
  }),
}

export { oneFranchiseQuery }
