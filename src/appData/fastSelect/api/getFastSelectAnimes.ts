"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { IAnimeSimpleModel } from "@entities/Anime"
import { fastSelectAnimesQuery } from "@entities/User"

const getFastSelectAnimes = async (
  username: string,
): Promise<IAnimeSimpleModel[]> => {
  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookies().get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({
      query: `
        query (${fastSelectAnimesQuery.label}) {
          ${fastSelectAnimesQuery.query}
        }
      `,
      variables: { ...fastSelectAnimesQuery.variables(username) },
    }),
    next: { revalidate: 0, tags: ["fastFind"] },
  })

  if (!result.ok)
    throw new Error(`Failed to get fastSelect anime: ${result.statusText}`)

  return (await result.json()).data.getUserPublicData.animeEstimates.map(
    (item: any) => item.base,
  )
}

export { getFastSelectAnimes }
