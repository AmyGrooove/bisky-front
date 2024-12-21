"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { allGenresQuery, IGenreFullModel } from "@entities/Genre"

const getAllGenresData = async (): Promise<IGenreFullModel[]> => {
  const cookieStore = await cookies()

  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookieStore.get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({
      query: `
        query (${allGenresQuery.label}) {
          ${allGenresQuery.query}
        }
      `,
      variables: { ...allGenresQuery.variables },
    }),
    next: { revalidate: 0, tags: ["allGenres"] },
  })

  if (!result.ok)
    throw new Error(`Failed to get all genres: ${result.statusText}`)

  const parsedResult = await result.json()

  return parsedResult.data.getGenres
}

export { getAllGenresData }
