"use server"

import { API_URL } from "@shared/constants"
import { IGenreFullModel } from "@entities/Genre"

const getGenresQL = async (): Promise<IGenreFullModel[]> => {
  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      query: `
        query ($animeQuery: GeneralAnimeQuery) {
          getGenres(animeQuery: $animeQuery) {
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
        }
      `,
      variables: { animeQuery: { count: 4 } },
    }),
    next: { revalidate: 1800, tags: ["mainGenres"] },
  })

  if (!result.ok) {
    throw new Error(`Failed to get genres: ${result.statusText}`)
  }

  return (await result.json()).data.getGenres
}

export { getGenresQL }
