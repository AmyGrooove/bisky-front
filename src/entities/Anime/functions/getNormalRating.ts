import { TRating } from "../types/TRating"

const getNormalRating = (rating: TRating) =>
  ({
    g: "0+",
    pg: "6+",
    pg_13: "13+",
    r: "16+",
    r_plus: "18+",
    rx: "18+",
    none: "null",
  })[rating]

export { getNormalRating }
