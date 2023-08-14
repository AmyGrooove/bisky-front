import { AnimeKindEnum } from "../models"

const prettyKind = (kind: AnimeKindEnum | undefined): string => {
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

export { prettyKind }
