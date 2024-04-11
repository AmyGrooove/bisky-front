"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { IAnimeFullModel } from "@entities/Anime"

const getPreviousSeasonDate = () => {
  const currentMonth = new Date().getMonth()
  const seasonsStartMonths = [11, 2, 5, 8]

  return new Date(
    new Date().getFullYear() - (currentMonth < 3 ? 1 : 0),
    seasonsStartMonths[Math.floor(currentMonth / 3)],
    1,
  )
}

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
      query: `
        query ($animeQuery: GeneralAnimeQuery) {
          getAnimes(animeQuery: $animeQuery) {
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
        }
      `,
      variables: {
        animeQuery: {
          count: 15,
          limit: { screenshotsCount: 7 },
          sort: { score_count: true, usersList_generalCount: true },
          filter: {
            dates_airedOn: {
              from: `${previousSeasonDate.getFullYear()}-${previousSeasonDate.getMonth()}-${previousSeasonDate.getDate()}`,
            },
            status: "ongoing",
          },
        },
      },
    }),
    next: { revalidate: 30, tags: ["mainAnime"] },
  })

  if (!result.ok) {
    throw new Error(`Failed to get season animes: ${result.statusText}`)
  }

  return (await result.json()).data.getAnimes
}

export { getSeasonAnimesQL }
