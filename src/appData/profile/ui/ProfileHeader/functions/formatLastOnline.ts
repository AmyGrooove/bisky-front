const formatLastOnline = (dateString: string | Date) => {
  const currentDate = new Date()
  const date = new Date(dateString)

  const diffMinutes = Math.floor(
    (currentDate.getTime() - date.getTime()) / (1000 * 60),
  )
  const diffHours = Math.floor(diffMinutes / 60)
  const diffDays = Math.floor(diffHours / 24)

  return diffMinutes < 10
    ? "в сети"
    : diffMinutes < 30
      ? `был в сети менее ${diffMinutes} минут назад`
      : diffMinutes < 1440
        ? `был в сети ${diffHours === 0 ? "менее часа" : diffHours === 1 ? "1 час" : diffHours < 5 ? `${diffHours} часа` : `${diffHours} часов`} назад`
        : diffDays < 10
          ? `был в сети ${diffDays === 1 ? "1 день" : `${diffDays} дня`} назад`
          : `был в сети ${date.toLocaleDateString()}`
}

export { formatLastOnline }
