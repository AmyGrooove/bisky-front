const allGenresQuery = {
  label: "$animeQuery: GeneralAnimeQuery, $genreQuery: GeneralGenreQuery",
  query: `
    getGenres(animeQuery: $animeQuery, genreQuery: $genreQuery) {
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
  variables: { animeQuery: { count: 4 }, genreQuery: { count: 100 } },
}

export { allGenresQuery }
