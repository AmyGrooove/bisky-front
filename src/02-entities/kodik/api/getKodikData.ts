import { KODIK_API_URL } from "@/01-shared/data"

import { KodikResultType } from "../models"

interface GetKodikDataResponse {
  time: string
  total: number
  results: KodikResultType[]
}

const getKodikData = async (animeId: number) => {
  const res = await fetch(`${KODIK_API_URL}${animeId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  })

  if (!res.ok) {
    return { data: null, error: true }
  }

  const data: GetKodikDataResponse = await res.json()

  return { data: data, error: false }
}

export { getKodikData }
