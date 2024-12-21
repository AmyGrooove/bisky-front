"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"

import { IAddAnimeInSkipListProps } from "./IAddAnimeInSkipListProps"

const addAnimeInSkipList = async (props: IAddAnimeInSkipListProps) => {
  const { animeId } = props

  const cookieStore = await cookies()

  const result = await fetch(API_URL + `/api/user/skipList`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookieStore.get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({ animeId }),
  })

  if (!result.ok)
    throw new Error(`Failed to add anime in skipList: ${result.statusText}`)

  return true
}

export { addAnimeInSkipList }
