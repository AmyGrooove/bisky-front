const getPreviousSeasonDate = () => {
  const currentMonth = new Date().getMonth()
  const seasonsStartMonths = [11, 2, 5, 8]

  return new Date(
    new Date().getFullYear() - (currentMonth < 3 ? 1 : 0),
    seasonsStartMonths[Math.floor(currentMonth / 3)],
    1,
  )
}

export { getPreviousSeasonDate }
