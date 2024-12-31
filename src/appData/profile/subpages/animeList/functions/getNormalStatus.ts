import { TListStatus } from "@entities/AnimeEstimate"

const getNormalWatchStatus = (status: TListStatus | null) =>
  status
    ? ({
        completed: "Просмотрен",
        added: "Добавлен",
        watching: "Смотрю",
        dropped: "Брошен",
        setWatch: "",
        cancel: "",
        skipped: "",
      }[status] ?? "")
    : ""

export { getNormalWatchStatus }
