import { TKind, TRating, TStatus } from "@entities/Anime"

const kind: TKind[] = [
  "tv",
  "movie",
  "ova",
  "ona",
  "special",
  "music",
  "tv_special",
  "none",
  "pv",
  "cm",
]

const rating: TRating[] = ["g", "pg", "pg_13", "r", "r_plus", "rx", "none"]

const status: TStatus[] = ["anons", "ongoing", "released"]

const filterEnumValues = <T>(
  values: string[] | undefined,
  enumType: "kind" | "rating" | "status",
): T[] => {
  if (!values) return []

  const enumValues = new Set<string>({ kind, rating, status }[enumType])
  return values.filter((value) => enumValues.has(value)) as T[]
}

export { filterEnumValues }
