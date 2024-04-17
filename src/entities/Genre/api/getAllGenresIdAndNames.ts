"use server"

import { API_URL } from "@shared/constants"

import { IGetAllGenresIdAndNamesResponse } from "../types/IGetAllGenresIdAndNamesResponse"

const getAllGenresIdAndNames = async (): Promise<
  IGetAllGenresIdAndNamesResponse[]
> => {
  const result = await fetch(API_URL + "/api/genre/allIdsAndNames", {
    method: "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    next: { revalidate: 86400 },
  })

  if (!result.ok)
    throw new Error(
      `Failed to get all genres id and names: ${result.statusText}`,
    )

  return result.json()
}

export { getAllGenresIdAndNames }
