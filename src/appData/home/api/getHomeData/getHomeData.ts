"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import {
  bestAnimesQuery,
  newSeriesAnimesQuery,
  seasonAnimesQuery,
} from "@entities/Anime"
import { homeGenresQuery } from "@entities/Genre"

import { IGetHomeDataResponse } from "./IGetHomeDataResponse"

const getHomeData = async (): Promise<IGetHomeDataResponse> => {
  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookies().get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({
      query: `
        query (${seasonAnimesQuery.label}, ${bestAnimesQuery.label}, ${newSeriesAnimesQuery.label}, ${homeGenresQuery.label}) {
          ${seasonAnimesQuery.query}
          ${bestAnimesQuery.query}
          ${newSeriesAnimesQuery.query}
          ${homeGenresQuery.query}
        }
      `,
      variables: {
        ...seasonAnimesQuery.variables,
        ...bestAnimesQuery.variables,
        ...newSeriesAnimesQuery.variables,
        ...homeGenresQuery.variables,
      },
    }),
    next: { revalidate: 30, tags: ["homeData"] },
  })

  if (!result.ok)
    throw new Error(`Failed to get home data: ${result.statusText}`)

  const parsedResult = await result.json()

  return {
    bestAnimes: parsedResult.data.bestAnimes,
    newSeriesAnimes: parsedResult.data.newSeriesAnimes,
    seasonAnimes: parsedResult.data.seasonAnimes,
    homeGenres: parsedResult.data.homeGenres,
  }
}

export { getHomeData }
