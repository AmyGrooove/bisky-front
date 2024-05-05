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
        averageDuration
        count
        lastEpisodeAiredDate
        nextEpisodeAiredDate
        singleEpisodes {
          airedOn
          duration
          name
        }
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
    },
    isWithoutRelations: true,
  },
}

export { fastFindAnimesQuery }
