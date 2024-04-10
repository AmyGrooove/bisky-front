import { API_URL } from "@shared/constants"

import { IAddUpdateAnimeFromListProps } from "../types/IAddUpdateAnimeFromListProps"

const addUpdateAnimeFromList = async (props: IAddUpdateAnimeFromListProps) => {
  const { accessToken, animeStatus, animeId } = props

  const result = await fetch(API_URL + `/api/user/${animeId}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({ status: animeStatus }),
    next: { revalidate: 30 },
  })

  if (!result.ok)
    throw new Error(
      `Failed to Add/Update anime from list: ${result.statusText}`,
    )

  return true
}

export { addUpdateAnimeFromList }
