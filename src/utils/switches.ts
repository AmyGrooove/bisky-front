import { SHKIMORI_URL } from "@/constants"
import { KindEnum } from "@/types"

export const getImageSrc = (
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

export const prettyRating = (
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

export const prettyKind = (kind: KindEnum): string => {
  switch (kind) {
    case "tv":
      return "TV Сериал"
    case "movie":
      return "Фильм"
    case "ova":
      return "OVA"
    case "ona":
      return "ONA"
    case "special":
      return "Спешл"
    case "music":
      return "Клип"
    default:
      return ""
  }
}
