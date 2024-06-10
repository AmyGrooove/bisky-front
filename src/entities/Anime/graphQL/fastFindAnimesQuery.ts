const fastFindAnimesQuery = {
  label: "$animeQuery: GeneralAnimeQuery, $isWithoutRelations: Boolean",
  query: `
    getAnimes(animeQuery: $animeQuery, isWithoutRelations: $isWithoutRelations) {
      _id
      dates {
        releasedOn
        airedOn
      }
      description {
        en
        ru
      }
      episodes {
        airedCount
        duration
        count
        lastEpisodeAiredDate
        nextEpisodeAiredDate
      }
      genres {
        _id
        name {
          en
          ru
        }
      }
      kind
      labels {
        en
        ru
        synonyms
      }
      poster
      rating
      score {
        averageScore
        count
      }
      screenshots
      status
      studios {
        _id
        name
      }
      updateDate
    }
  `,
  variables: {
    animeQuery: {
      count: 20,
      isPaginationOff: true,
      sort: { usersList_generalCount: true, score_count: true },
      userFilters: {
        isHiddenAnimeInSkipList: true,
        isHiddenAnimeInUserList: true,
      },
      filterExclude: {
        kind: ["music", "none", "pv", "cm"],
        rating: ["rx", "none", "g", "pg"],
        genres_ID_ONLY: ["664125f3fab099cd5adf415f"],
      },
    },
    isWithoutRelations: true,
  },
}

export { fastFindAnimesQuery }
