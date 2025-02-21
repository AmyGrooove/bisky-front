import { isNil } from '@shared/utils/functions'

const getSeasonYear = (value: Date | string | null, isUpcoming = false) => {
  if (isNil(value)) return null

  const date = new Date(value)
  const seasons = ['Зима', 'Весна', 'Лето', 'Осень']
  const upcomingSeasons = ['зимой', 'весной', 'летом', 'осенью']
  const month = date.getMonth()
  const year = date.getFullYear()

  const season = isUpcoming
    ? upcomingSeasons[Math.floor(month / 3)]
    : seasons[Math.floor(month / 3)]

  return isUpcoming ? `Выйдет ${season} ${year} г.` : `${season} ${year} г.`
}

export { getSeasonYear }
