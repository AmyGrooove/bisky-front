import { API_URL } from "@shared/constants"

import { IAddUpdateAnimeFromListProps } from "../types/IAddUpdateAnimeFromListProps"

const removeAnimeFromList = async (props: IAddUpdateAnimeFromListProps) => {
  const { accessToken, animeId } = props

  const result = await fetch(API_URL + `/api/user/${animeId}/status`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    next: { revalidate: 30 },
  })

  if (!result.ok)
    throw new Error(`Failed to remove anime from list: ${result.statusText}`)

  return true
}

export { removeAnimeFromList }
