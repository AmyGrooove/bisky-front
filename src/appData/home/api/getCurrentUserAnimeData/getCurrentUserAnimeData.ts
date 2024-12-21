"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { currentUserAnimesQuery, IUserPublicFullModel } from "@entities/User"
import { EListStatus } from "@entities/AnimeEstimate"

const getCurrentUserAnimeData = async (
  animeListStatus: keyof typeof EListStatus,
): Promise<IUserPublicFullModel | null> => {
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
          query (${currentUserAnimesQuery.label}) {
            ${currentUserAnimesQuery.query}
          }
        `,
      variables: { ...currentUserAnimesQuery.variables(animeListStatus) },
    }),
    next: { revalidate: 0, tags: ["userData"] },
  })

  const parsedResult = (await result.json()).data

  if (!result.ok || !parsedResult) return null

  return parsedResult.getUserPublicData
}

export { getCurrentUserAnimeData }
