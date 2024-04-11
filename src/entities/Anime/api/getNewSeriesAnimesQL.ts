"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { IAnimeFullModel } from "@entities/Anime"

const getNewSeriesAnimesQL = async (): Promise<IAnimeFullModel[]> => {
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
            poster
            score {
              averageScore
            }
            episodes {
              airedCount
            }
            status
            userData {
              animeStatus
              score
            }
            usersList {
              generalCount
              addedCount
            }
          }
        }
      `,
      variables: {
        animeQuery: {
          count: 24,
          sort: { episodes_lastEpisodeAiredDate: true },
        },
      },
    }),
    next: { revalidate: 60, tags: ["mainAnime"] },
  })

  if (!result.ok) {
    throw new Error(`Failed to get best animes: ${result.statusText}`)
  }

  return (await result.json()).data.getAnimes
}

export { getNewSeriesAnimesQL }
