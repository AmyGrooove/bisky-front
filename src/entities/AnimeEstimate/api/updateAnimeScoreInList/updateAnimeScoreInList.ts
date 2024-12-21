"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"

import { IUpdateAnimeScoreInListProps } from "./IUpdateAnimeScoreInListProps"

const updateAnimeScoreInList = async (props: IUpdateAnimeScoreInListProps) => {
  const { animeId, animeScore } = props

  const cookieStore = await cookies()

  const result = await fetch(API_URL + `/api/user/${animeId}/score`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookieStore.get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({ score: animeScore }),
  })

  if (!result.ok)
    throw new Error(`Failed to remove anime from list: ${result.statusText}`)

  return true
}

export { updateAnimeScoreInList }
