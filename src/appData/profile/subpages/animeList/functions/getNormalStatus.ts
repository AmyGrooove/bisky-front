import { EListStatus } from "@entities/AnimeEstimate"

const getNormalWatchStatus = (status: keyof typeof EListStatus | null) =>
  status
    ? {
        completed: "Просмотрен",
        added: "Добавлен",
        watching: "Смотрю",
        dropped: "Брошен",
        setWatch: "",
        cancel: "",
        skipped: "",
      }[status] ?? ""
    : ""

export { getNormalWatchStatus }
