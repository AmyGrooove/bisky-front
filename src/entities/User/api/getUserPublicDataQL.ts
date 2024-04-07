import { API_URL } from "@shared/constants"

import { IUserPublicFullModel } from "../types/IUserPublicFullModel"
import { IGetUserPublicDataQL } from "../types/IGetUserPublicDataQL"

const getUserPublicDataQL = async (
  props?: IGetUserPublicDataQL,
): Promise<IUserPublicFullModel | null> => {
  const {
    accessToken = "",
    _id = null,
    username = null,
    animeListStatus = null,
  } = props ?? {}

  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({
      query: `{
        getUserPublicData(
          animeQuery: { sort: { episodes_lastEpisodeAiredDate: true } }
          userQuery: { filter: { _id_ID: ${_id ? `"${_id}"` : null}, username: ${username ? `"${username}"` : null} }, animeListStatus: ${animeListStatus} }
        ) {
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
      }`,
    }),
    next: { revalidate: 30 },
  })

  const parsedResult = (await result.json()).data

  if (!result.ok || !parsedResult) return null

  return parsedResult.getUserPublicData
}

export { getUserPublicDataQL }
