"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"

import { IAddUpdateAnimeFromListProps } from "./IAddUpdateAnimeFromListProps"

const addUpdateAnimeFromList = async (props: IAddUpdateAnimeFromListProps) => {
  const { animeStatus, animeId } = props

  const cookieStore = cookies()

  const result = await fetch(API_URL + `/api/user/${animeId}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookieStore.get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({ status: animeStatus }),
  })

  if (!result.ok)
    throw new Error(
      `Failed to Add/Update anime from list: ${result.statusText}`,
    )

  return true
}

export { addUpdateAnimeFromList }
