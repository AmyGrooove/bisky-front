import { AnimeStatusEnum } from "../models"

const prettyStatus = (status: AnimeStatusEnum | undefined): string => {
  switch (status) {
    case "anons":
      return "Анонс"
    case "ongoing":
      return "Онгоинг"
    case "released":
      return "Вышло"
    default:
      return ""
  }
}

export { prettyStatus }
