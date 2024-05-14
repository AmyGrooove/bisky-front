"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { IAnimeFullModel, oneAnimeQuery } from "@entities/Anime"

import { IGetCurrentAnimeDataProps } from "./IGetCurrentAnimeDataProps"

const getCurrentAnimeData = async (
  props: IGetCurrentAnimeDataProps,
): Promise<IAnimeFullModel> => {
  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookies().get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({
      query: `
        query (${oneAnimeQuery.label}) {
          ${oneAnimeQuery.query}
        }
      `,
      variables: { ...oneAnimeQuery.variables(props.animeId) },
    }),
    next: { revalidate: 30, tags: ["oneAnime"] },
  })

  if (!result.ok) throw new Error(`Failed to get anime: ${result.statusText}`)

  return (await result.json()).data.getAnimes[0]
}

export { getCurrentAnimeData }
