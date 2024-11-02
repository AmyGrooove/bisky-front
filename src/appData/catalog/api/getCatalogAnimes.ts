"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import {
  catalogAnimesQuery,
  IAnimeFullModel,
  ICatalogAnimesVariables,
} from "@entities/Anime"

const getCatalogAnimes = async (
  props: ICatalogAnimesVariables,
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
        query (${catalogAnimesQuery.label}) {
          ${catalogAnimesQuery.query}
        }
      `,
      variables: { ...catalogAnimesQuery.variables(props) },
    }),
    next: { revalidate: 0, tags: ["catalogAnime"] },
  })

  if (!result.ok)
    throw new Error(`Failed to get catalog anime: ${result.statusText}`)

  return (await result.json()).data.getAnimes
}

export { getCatalogAnimes }
