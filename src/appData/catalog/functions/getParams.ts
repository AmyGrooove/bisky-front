import { ReadonlyURLSearchParams } from "next/navigation"

import { TKind, TRating, TStatus } from "@entities/Anime"

import { filterEnumValues } from "./filterEnumValues"

const getParams = (searchParams: ReadonlyURLSearchParams) => {
  const dates_airedOn = {
    from: searchParams.get("datesFrom")
      ? Number(searchParams.get("datesFrom"))
      : null,
    to: searchParams.get("datesTo")
      ? Number(searchParams.get("datesTo"))
      : null,
  }

  const filterInclude = {
    genres_ID_ONLY: searchParams.get("genres")?.split(",") ?? [],
    kind: filterEnumValues<TKind>(searchParams.get("kind")?.split(","), "kind"),
    rating: filterEnumValues<TRating>(
      searchParams.get("rating")?.split(","),
      "rating",
    ),
    status: filterEnumValues<TStatus>(
      searchParams.get("status")?.split(","),
      "status",
    ),
    studios_ID_ONLY: searchParams.get("studios")?.split(",") ?? [],
  }

  const filterExclude = {
    genres_ID_ONLY: searchParams.get("genresNot")?.split(",") ?? [],
    kind: filterEnumValues<TKind>(
      searchParams.get("kindNot")?.split(","),
      "kind",
    ),
    rating: filterEnumValues<TRating>(
      searchParams.get("ratingNot")?.split(","),
      "rating",
    ),
    status: filterEnumValues<TStatus>(
      searchParams.get("statusNot")?.split(","),
      "status",
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
