import { API_URL } from "@shared/constants"

import { ICreateNewUser } from "../types/ICreateNewUser"

const createNewUser = async (props: ICreateNewUser): Promise<true> => {
  const result = await fetch(API_URL + "/api/auth/register", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(props),
    next: { revalidate: 30 },
  })

  if (!result.ok)
    throw new Error(`Failed to register user: ${result.statusText}`)

  return true
}

export { createNewUser }
