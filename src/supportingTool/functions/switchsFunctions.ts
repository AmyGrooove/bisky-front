const getRating = (score: number) => {
  switch (true) {
  case score >= 7:
    return 'score_high'
  case score >= 5:
    return 'score_medium'
  default:
    return 'score_low'
  }
}

const getNormalKind = (value: string): string => {
  const normalKinds: { [key: string]: string } = {
    tv: 'Сериал',
    movie: 'Фильм',
    default: 'anime',
  }
  return normalKinds[value] || normalKinds.default
}

const getNormalRating = (value: string): string => {
  const normalRating: { [key: string]: string } = {
    g: 'G',
    pg: 'PG',
    pg_13: 'PG-13',
    r: 'R-17',
    r_plus: 'R+',
    default: 'Rx',
  }
  return normalRating[value] || normalRating.default
}

const nextEpisode = (date: string) => {
  let normalDate = (new Date(date).getTime() - Date.now()) / 3600000

  if (normalDate >= 24) {
    normalDate = Math.floor(normalDate / 24)

    switch (normalDate % 10) {
    case 1:
      return normalDate + ' день'
    case 2:
    case 3:
    case 4:
      return normalDate + ' дня'
    default:
      return normalDate + ' дней'
    }
  } else {
    normalDate = Math.floor(normalDate)

    switch (normalDate % 10) {
    case 1:
      return normalDate + ' час'
    case 2:
    case 3:
    case 4:
      return normalDate + ' часа'
    case 0:
      return '<1 часа'
    default:
      return normalDate + ' часов'
    }
  }
}

export { getNormalKind, getRating, nextEpisode, getNormalRating }
