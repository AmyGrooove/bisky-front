import { ReadonlyURLSearchParams } from "next/navigation"

import { EKind, ERating, EStatus } from "@entities/Anime"

import { filterEnumValues } from "./filterEnumValues"

const getParams = (searchParams: ReadonlyURLSearchParams) => {
  const dates_airedOn = {
    from: searchParams.get("airedOn")
      ? Number(searchParams.get("airedOn"))
      : null,
    to: searchParams.get("airedOn")
      ? Number(searchParams.get("airedOn"))
      : null,
  }

  const filterInclude = {
    genres_ID_ONLY: searchParams.get("genres")?.split(",") ?? [],
    kind: filterEnumValues(searchParams.get("kind")?.split(","), EKind),
    rating: filterEnumValues(searchParams.get("rating")?.split(","), ERating),
    status: filterEnumValues(searchParams.get("status")?.split(","), EStatus),
    studios_ID_ONLY: searchParams.get("studios")?.split(",") ?? [],
  }

  const filterExclude = {
    genres_ID_ONLY: searchParams.get("genresNot")?.split(",") ?? [],
    kind: filterEnumValues(searchParams.get("kindNot")?.split(","), EKind),
    rating: filterEnumValues(
      searchParams.get("ratingNot")?.split(","),
      ERating,
    ),
    status: filterEnumValues(
      searchParams.get("statusNot")?.split(","),
      EStatus,
    ),
    studios_ID_ONLY: searchParams.get("studiosNot")?.split(",") ?? [],
  }

  const sort =
    searchParams.get("sort") === "scores"
      ? "scores"
      : searchParams.get("sort") === "dates"
        ? "dates"
        : ("scores" as "scores" | "dates")

  return { dates_airedOn, filterInclude, filterExclude, sort }
}

export { getParams }
