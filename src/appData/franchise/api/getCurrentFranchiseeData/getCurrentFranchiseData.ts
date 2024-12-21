"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { IFranchiseFullModel, oneFranchiseQuery } from "@entities/Franchise"

import { IGetCurrentFranchiseDataProps } from "./IGetCurrentFranchiseDataProps"

const getCurrentFranchiseData = async (
  props: IGetCurrentFranchiseDataProps,
): Promise<IFranchiseFullModel> => {
  const cookieStore = await cookies()

  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookieStore.get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({
      query: `
        query (${oneFranchiseQuery.label}) {
          ${oneFranchiseQuery.query}
        }
      `,
      variables: { ...oneFranchiseQuery.variables(props.franchiseId) },
    }),
    next: { revalidate: 0, tags: ["oneFranchise"] },
  })

  if (!result.ok)
    throw new Error(`Failed to get franchise: ${result.statusText}`)

  return (await result.json()).data.getFranchises[0]
}

export { getCurrentFranchiseData }
