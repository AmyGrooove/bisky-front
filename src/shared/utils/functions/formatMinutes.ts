const formatMinutes = (totalMinutes: number): string => {
  const sign = totalMinutes < 0 ? '-' : ''
  const abs = Math.abs(Math.trunc(totalMinutes))
  const h = Math.floor(abs / 60)
  const m = abs % 60

  if (h === 0) return `${sign}${m} мин`
  if (m === 0) return `${sign}${h} ч`

  return `${sign}${h} ч ${m} мин`
}

export { formatMinutes }
