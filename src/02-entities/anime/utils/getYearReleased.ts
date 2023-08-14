const getYearReleased = (dateInput: Date | null): string => {
  if (dateInput === null) {
    return "Нет даты выхода"
  }

  const date = new Date(dateInput)
  const year = date.getFullYear()

  return `${year} г.`
}

export { getYearReleased }
