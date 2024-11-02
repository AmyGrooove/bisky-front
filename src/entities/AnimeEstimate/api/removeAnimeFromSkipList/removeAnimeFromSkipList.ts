"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"

import { IRemoveAnimeFromSkipListProps } from "./IRemoveAnimeFromSkipListProps"

const removeAnimeFromSkipList = async (
  props: IRemoveAnimeFromSkipListProps,
) => {
  const { animeId } = props

  const cookieStore = cookies()

  const result = await fetch(API_URL + `/api/user/skipList`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookieStore.get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({ animeId }),
  })

  if (!result.ok)
    throw new Error(`Failed to Add anime in skipList: ${result.statusText}`)

  return true
}

export { removeAnimeFromSkipList }
