const oneAnimeQuery = {
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
      franchise {
        _id
        name {
          en
          ru
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
      otherPlatforms {
        platform {
          _id
          name {
            en
            ru
          }
          logo
        }
        url
      }
      poster
      rating
      related {
        relation {
          en
          ru
        }
        base {
          _id
          poster
          labels {
            en
            ru
          }
          userData {
            score
            animeStatus
          }
          usersList {
            generalCount
            addedCount
          }
          score {
            averageScore
          }
          status
          episodes {
            airedCount
          }
        }
      }
      score {
        averageScore
        count
      }
      screenshots
      status
      studios {
        _id
        name
        logo
      }
      updateDate
      userData {
        watchedSeries
        score
        animeStatus
      }
      usersList {
        addedCount
        completedCount
        droppedCount
        generalCount
        watchingCount
      }
      videos {
        name
        url
      }
    }
  `,
  variables: (animeId: string) => ({
    animeQuery: { filter: { _id_ID: [animeId] }, isPaginationOff: true },
    isWithoutRelations: false,
  }),
}

export { oneAnimeQuery }
