import { AnimeDatesType } from "../models"

const formatDates = (datesInput: AnimeDatesType | undefined): string => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ]

  if (datesInput === null || datesInput === undefined) {
    return "Нет даты"
  }

  let result = ""

  if (datesInput.airedOn) {
    const date = new Date(datesInput.airedOn)
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()
    result += `С ${day} ${months[month]} ${year} г.`
  }

  if (datesInput.releasedOn) {
    const date = new Date(datesInput.releasedOn)
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()
    result += ` по ${day} ${months[month]} ${year} г.`
  }

  return result
}

export { formatDates }
