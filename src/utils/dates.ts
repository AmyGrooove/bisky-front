export const formatDate = (dateInput: Date | null): string => {
  const months = ["Зима", "Весна", "Лето", "Осень"]

  if (dateInput === null) {
    return "Нет даты"
  }

  const date = new Date(dateInput)
  const month = months[Math.floor((date.getMonth() + 1) / 4)]
  const year = date.getFullYear()

  return `${month} ${year} г.`
}

export const getYear = (dateInput: Date | null): string => {
  if (dateInput === null) {
    return "Нет даты выхода"
  }

  const date = new Date(dateInput)
  const year = date.getFullYear()

  return `${year} г.`
}
