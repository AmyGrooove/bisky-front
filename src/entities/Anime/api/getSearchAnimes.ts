"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { IAnimeFullModel, searchAnimesQuery } from "@entities/Anime"

const getSearchAnimes = async (
  searchInput: string,
): Promise<IAnimeFullModel[]> => {
  const cookieStore = cookies()

  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookieStore.get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({
      query: `
        query (${searchAnimesQuery.label}) {
          ${searchAnimesQuery.query}
        }
      `,
      variables: { ...searchAnimesQuery.variables(searchInput) },
    }),
    next: { revalidate: 30, tags: ["searchAnimes"] },
  })

  if (!result.ok)
    throw new Error(`Failed to get search anime: ${result.statusText}`)

  return (await result.json()).data.getAnimes
}

export { getSearchAnimes }
