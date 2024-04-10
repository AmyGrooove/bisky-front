import { API_URL } from "@shared/constants"

import { IGenreFullModel } from "../types/IGenreFullModel"

const getGenresQL = async (): Promise<IGenreFullModel[]> => {
  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      query: `{
        getGenres(animeQuery: { count: 4 }) {
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
      }`,
    }),
    next: { tags: ["reviews"] },
  })

  if (!result.ok) {
    throw new Error(`Failed to get genres: ${result.statusText}`)
  }

  return (await result.json()).data.getGenres
}

export { getGenresQL }
