"use server"

import { API_URL } from "@shared/constants"

const getAllFranchiseIds = async (): Promise<string[]> => {
  const result = await fetch(API_URL + "/api/franchise/allIds", {
    method: "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    next: { revalidate: 600 },
  })

  if (!result.ok)
    throw new Error(`Failed to get all franchise ids: ${result.statusText}`)

  return result.json()
}

export { getAllFranchiseIds }
