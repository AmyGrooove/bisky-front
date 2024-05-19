"use server"

import { API_URL } from "@shared/constants"

const getAllAnimesIdAndUpdateDate = async (): Promise<
  { _id: string; updateDate: Date }[]
> => {
  const result = await fetch(API_URL + "/api/anime/allIdsAndUpdateDate", {
    method: "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    next: { revalidate: 86400 },
  })

  if (!result.ok)
    throw new Error(
      `Failed to get all animes id and updateDate: ${result.statusText}`,
    )

  return result.json()
}

export { getAllAnimesIdAndUpdateDate }
