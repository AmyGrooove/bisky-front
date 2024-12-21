"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"

import { IRemoveAnimeFromListProps } from "./IRemoveAnimeFromListProps"

const removeAnimeFromList = async (props: IRemoveAnimeFromListProps) => {
  const { animeId } = props

  const cookieStore = await cookies()

  const result = await fetch(API_URL + `/api/user/${animeId}/status`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookieStore.get("access-token")?.value ?? ""),
    },
  })

  if (!result.ok)
    throw new Error(`Failed to remove anime from list: ${result.statusText}`)

  return true
}

export { removeAnimeFromList }
