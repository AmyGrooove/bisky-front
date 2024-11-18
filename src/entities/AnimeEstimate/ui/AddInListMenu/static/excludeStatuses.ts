import { EStatus } from "@entities/Anime"
import { EListStatus } from "@entities/AnimeEstimate"

const excludeStatuses = (value: keyof typeof EStatus = "released") =>
  ({
    anons: ["completed", "watching", "dropped"],
    ongoing: ["completed", "dropped"],
    released: [],
  })[value] as (keyof typeof EListStatus)[]

export { excludeStatuses }
