"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { IUserPublicFullModel } from "@entities/User"

import { IGetUserPublicDataQLProps } from "./IGetUserPublicDataQLProps"

const getUserPublicDataQL = async (
  props?: IGetUserPublicDataQLProps,
): Promise<IUserPublicFullModel | null> => {
  const {
    _id = null,
    username = null,
    animeListStatus = null,
    certainAnimeId = null,
  } = props ?? {}

  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookies().get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({
      query: `
        query ($animeQuery: GeneralAnimeQuery, $userQuery: GeneralUserQuery) {
          getUserPublicData(animeQuery: $animeQuery, userQuery: $userQuery) {
            animeEstimates {
              watchedSeries
              status
              base {
                usersList {
                  addedCount
                }
                userData {
                  animeStatus
                  score
                  watchedSeries
                }
                score {
                  averageScore
                }
                poster
                labels {
                  en
                  ru
                }
                episodes {
                  airedCount
                }
                _id
                status
              }
              score
            }
            avatar
            email
            lastOnlineDate
            role
            username
            _id
          }
        }
      `,
      variables: {
        animeQuery: {
          filter: { _id_ID: certainAnimeId ? [certainAnimeId] : null },
          sort: { episodes_lastEpisodeAiredDate: true },
        },
        userQuery: {
          animeListStatus: animeListStatus,
          filter: {
            _id_ID: _id ?? null,
            username: username ?? null,
          },
        },
      },
    }),
    next: { revalidate: 0, tags: ["userData"] },
  })

  const parsedResult = (await result.json()).data

  if (!result.ok || !parsedResult) return null

  return parsedResult.getUserPublicData
}

export { getUserPublicDataQL }
