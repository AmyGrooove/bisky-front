"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { currentUserDataQuery, IUserPublicFullModel } from "@entities/User"

import { IGetCurrentUserDataProps } from "./IGetCurrentUserDataProps"

const getCurrentUserData = async (
  props: IGetCurrentUserDataProps,
): Promise<IUserPublicFullModel> => {
  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookies().get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({
      query: `
        query (${currentUserDataQuery.label}) {
          ${currentUserDataQuery.query}
        }
      `,
      variables: { ...currentUserDataQuery.variables(props.username) },
    }),
    next: { revalidate: 30, tags: ["userData"] },
  })

  if (!result.ok)
    throw new Error(`Failed to get user data: ${result.statusText}`)

  return (await result.json()).data.getUserPublicData
}

export { getCurrentUserData }
