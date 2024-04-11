"use server"

import { API_URL } from "@shared/constants"

const getAllAnimesId = async (): Promise<string[]> => {
  const result = await fetch(API_URL + "/api/anime/allIds", {
    method: "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    next: { revalidate: 86400 },
  })

  if (!result.ok)
    throw new Error(`Failed to get all animes id: ${result.statusText}`)

  return result.json()
}

export { getAllAnimesId }
