import { AnimeRatingEnum } from "../models"

const prettyRating = (mpaa: AnimeRatingEnum | undefined): string => {
  switch (mpaa) {
    case "none":
      return ""
    case "g":
      return "6+"
    case "pg":
      return "12+"
    case "pg_13":
      return "13+"
    case "r":
      return "16+"
    case "r_plus":
      return "18+"
    case "rx":
      return "22+"
    default:
      return ""
  }
}

export { prettyRating }
