const formatDate = (dateInput: Date): string => {
  const months = ["Зима", "Весна", "Лето", "Осень"]

  const date = new Date(dateInput)
  const month = months[Math.floor((date.getMonth() + 1) / 4)]
  const year = date.getFullYear()

  return `${month} ${year} г.`
}

export { formatDate }
