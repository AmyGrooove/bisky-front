const formatLastOnline = (input: string | Date): string => {
  const now = Date.now()
  const date = new Date(input)
  const diffMin = Math.floor((now - date.getTime()) / 60000)

  if (diffMin < 10) return 'в сети'
  if (diffMin < 30) return `был в сети менее ${diffMin} минут назад`
  if (diffMin < 1440) {
    const hours = Math.floor(diffMin / 60)
    const hourText =
      hours === 0
        ? 'менее часа'
        : hours === 1
          ? '1 час'
          : hours < 5
            ? `${hours} часа`
            : `${hours} часов`
    return `был в сети ${hourText} назад`
  }

  const days = Math.floor(diffMin / 1440)
  return days < 10
    ? `был в сети ${days === 1 ? '1 день' : `${days} дня`} назад`
    : `был в сети ${date.toLocaleDateString()}`
}

export { formatLastOnline }
