import { SHKIMORI_URL } from "@/constants"

const getImageSrc = (
  src: string,
  imageType: "poster" | "screenshot",
  errorGet = false,
) => {
  switch (imageType) {
    case "poster":
      return SHKIMORI_URL + "/system/animes/original/" + src + ".jpg"
    case "screenshot":
      return SHKIMORI_URL + "/system/screenshots/original/" + src + ".jpg"
    default:
      return src
  }
}

const prettyRating = (
  mpaa: "none" | "g" | "pg" | "pg_13" | "r" | "r_plus" | "rx",
): string => {
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

export { getImageSrc, prettyRating }
