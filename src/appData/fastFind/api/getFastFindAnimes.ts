"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { fastFindAnimesQuery, IAnimeFullModel } from "@entities/Anime"

const getFastFindAnimes = async (): Promise<IAnimeFullModel[]> => {
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
        query (${fastFindAnimesQuery.label}) {
          ${fastFindAnimesQuery.query}
        }
      `,
      variables: { ...fastFindAnimesQuery.variables },
    }),
    next: { revalidate: 0, tags: ["fastFind"] },
  })

  if (!result.ok)
    throw new Error(`Failed to get fastFind anime: ${result.statusText}`)

  return (await result.json()).data.getAnimes
}

export { getFastFindAnimes }
