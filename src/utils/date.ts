export const formatDate = (dateInput: Date): string => {
  const months = ["Зима", "Весна", "Лето", "Осень"]

  const date = new Date(dateInput)
  const day = date.getDay()
  const month = months[Math.floor((date.getMonth() + 1) / 4)]
  const year = date.getFullYear()

  return `${day} ${month} ${year} г.`
}
