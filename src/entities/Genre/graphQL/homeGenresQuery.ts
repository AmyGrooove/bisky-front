const homeGenresQuery = {
  label: "$homeGenresAnimeVariables: GeneralAnimeQuery",
  query: `
    homeGenres: getGenres(animeQuery: $homeGenresAnimeVariables) {
      _id
      description {
        en
        ru
      }
      name {
        en
        ru
      }
      relatedWorks {
        _id
        poster
      }
    }
  `,
  variables: { homeGenresAnimeVariables: { count: 4 } },
}

export { homeGenresQuery }
