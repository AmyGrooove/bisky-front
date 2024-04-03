import { ERating } from "../enums/ERating"

const getNormalRating = (rating: keyof typeof ERating) =>
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
