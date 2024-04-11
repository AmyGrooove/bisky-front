"use server"

import { API_URL } from "@shared/constants"

import { IFactModel } from "../types/IFactModel"

const getOneRandomFact = async (): Promise<IFactModel> => {
  const result = await fetch(API_URL + "/api/getOneRandomFact", {
    method: "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    next: { revalidate: 20, tags: ["mainFact"] },
  })

  if (!result.ok) {
    throw new Error(`Failed to get fact: ${result.statusText}`)
  }

  return await result.json()
}

export { getOneRandomFact }
