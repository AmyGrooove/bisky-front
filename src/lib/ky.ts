import ky from "ky-universal"

import { API_URL } from "@/constants"

export const mainApi = ky.create({
  prefixUrl: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
