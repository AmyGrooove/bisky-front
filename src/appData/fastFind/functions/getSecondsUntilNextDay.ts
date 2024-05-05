const getSecondsUntilNextDay = () => {
  const now = new Date()

  const tomorrow = new Date()
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1)
  tomorrow.setUTCHours(0, 0, 0, 0)

  return Math.floor(
    (tomorrow.getTime() - now.getTime()) / 1000 + now.getTimezoneOffset() * 60,
  )
}

export { getSecondsUntilNextDay }
