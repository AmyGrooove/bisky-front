"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import {
  IUserPublicFullModel,
  currentUserAnimeEstimateQuery,
} from "@entities/User"

import { IGetCurrentUserAnimeEstimateDataProps } from "./IGetCurrentUserAnimeDataProps"

const getCurrentUserAnimeEstimateData = async (
  props: IGetCurrentUserAnimeEstimateDataProps,
): Promise<IUserPublicFullModel | null> => {
  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookies().get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({
      query: `  
          query (${currentUserAnimeEstimateQuery.label}) {
            ${currentUserAnimeEstimateQuery.query}
          }
      `,
      variables: {
        ...currentUserAnimeEstimateQuery.variables(props),
      },
    }),
    next: { revalidate: 0, tags: ["userData"] },
  })

  const parsedResult = (await result.json()).data

  if (!result.ok || !parsedResult) return null

  return parsedResult.getUserPublicData
}

export { getCurrentUserAnimeEstimateData }
