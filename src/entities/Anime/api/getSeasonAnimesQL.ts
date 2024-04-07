import { cookies } from "next/headers"

import { IAnimeFullModel } from "@entities/Anime/types/IAnimeFullModel"
import { API_URL } from "@shared/constants"

import { getPreviousSeasonDate } from "../functions/getPreviousSeasonDate"

const getSeasonAnimesQL = async (): Promise<IAnimeFullModel[]> => {
  const previousSeasonDate = getPreviousSeasonDate()

  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookies().get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({
      query: `{
        getAnimes(
          animeQuery: {
            count: 15
            limit: { screenshotsCount: 7 }
            sort: { score_count: true, usersList_generalCount: true }
            filter: { dates_airedOn: { from: "${previousSeasonDate.getFullYear()}-${previousSeasonDate.getMonth()}-${previousSeasonDate.getDate()}" }, status: ongoing }
          }
        ) {
          _id
          labels {
            en
            ru
          }
          genres {
            name {
              en
              ru
            }
          }
          poster
          score {
            averageScore
          }
          screenshots
        }
      }`,
    }),
    next: { revalidate: 60 },
  })

  if (!result.ok) {
    throw new Error(`Failed to get season animes: ${result.statusText}`)
  }

  return (await result.json()).data.getAnimes
}

export { getSeasonAnimesQL }
