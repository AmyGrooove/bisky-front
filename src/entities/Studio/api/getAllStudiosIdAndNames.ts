"use server"

import { API_URL } from "@shared/constants"

import { IGetAllStudiosIdAndNamesResponse } from "../types/IGetAllStudiosIdAndNamesResponse"

const getAllStudiosIdAndNames = async (): Promise<
  IGetAllStudiosIdAndNamesResponse[]
> => {
  const result = await fetch(API_URL + "/api/studio/allIdsAndNames", {
    method: "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    next: { revalidate: 86400 },
  })

  if (!result.ok)
    throw new Error(
      `Failed to get all studios id and names: ${result.statusText}`,
    )

  return result.json()
}

export { getAllStudiosIdAndNames }
