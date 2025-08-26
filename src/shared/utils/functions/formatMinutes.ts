const formatMinutes = (totalMinutes: number) => {
  const sign = totalMinutes < 0 ? '-' : ''
  const minutesAbsolute = Math.abs(Math.trunc(totalMinutes))
  const hours = Math.floor(minutesAbsolute / 60)
  const minutes = minutesAbsolute % 60
  const parts: string[] = []

  if (hours) parts.push(`${hours} ч`)
  if (minutes) parts.push(`${minutes} мин`)

  const formatted = parts.length ? parts.join(' ') : '0 мин'

  return `${sign}${formatted}`
}

export { formatMinutes }
