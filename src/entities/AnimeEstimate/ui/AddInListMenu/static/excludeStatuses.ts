import { TStatus } from "@entities/Anime"
import { TListStatus } from "@entities/AnimeEstimate"

const excludeStatuses = (value: TStatus = "released") =>
  ({
    anons: ["completed", "watching", "dropped"],
    ongoing: ["completed", "dropped"],
    released: [],
  })[value] as TListStatus[]

export { excludeStatuses }
