const pluralRu = (count: number, forms: [string, string, string]) => {
  const mod100 = Math.abs(count) % 100
  const mod10 = mod100 % 10

  return mod100 > 10 && mod100 < 20
    ? forms[2]
    : mod10 === 1
      ? forms[0]
      : mod10 > 1 && mod10 < 5
        ? forms[1]
        : forms[2]
}

const getProfileOnline = (value: string | Date) => {
  const dateValue = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(dateValue.getTime())) return '—'

  const millisecondsDiff = Math.max(0, Date.now() - dateValue.getTime())
  const minutesDiff = Math.floor(millisecondsDiff / 60000)
  const daysDiff = Math.floor(minutesDiff / 1440)

  const dateOnly = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  if (minutesDiff <= 30) return `В сети`

  if (daysDiff >= 7) return dateOnly.format(dateValue)

  if (daysDiff >= 1) {
    const word = pluralRu(daysDiff, ['день', 'дня', 'дней'])
    return `В сети ${daysDiff} ${word} назад`
  }

  const hoursDiff = Math.floor(minutesDiff / 60)
  if (hoursDiff >= 1) {
    const word = pluralRu(hoursDiff, ['час', 'часа', 'часов'])
    return `В сети ${hoursDiff} ${word} назад`
  }

  const word = pluralRu(minutesDiff, ['минуту', 'минуты', 'минут'])
  return `В сети ${minutesDiff} ${word} назад`
}

export { getProfileOnline }
