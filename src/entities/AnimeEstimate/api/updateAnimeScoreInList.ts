import { API_URL } from "@shared/constants"

import { IUpdateAnimeScoreInList } from "../types/IUpdateAnimeScoreInList"

const updateAnimeScoreInList = async (props: IUpdateAnimeScoreInList) => {
  const { accessToken, animeId, animeScore } = props

  const result = await fetch(API_URL + `/api/user/${animeId}/score`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({ score: animeScore }),
    next: { revalidate: 30 },
  })

  if (!result.ok)
    throw new Error(`Failed to remove anime from list: ${result.statusText}`)

  return true
}

export { updateAnimeScoreInList }
