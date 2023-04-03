import useDebounce from "./useDebounce"

function swiperGridArrays<T>(arr: T[]): {
  first: T[]
  second: T[]
} {
  const first: T[] = []
  const second: T[] = []
  let change = true

  arr.forEach((el) => {
    if (change) {
      first.push(el)
      change = false
    } else {
      second.push(el)
      change = true
    }
  })

  return { first, second }
}

const dateFormat = (date: Date | null) => {
  if (!date) return null

  const normDate = new Date(date)

  if (
    normDate.getFullYear() >= new Date().getFullYear() &&
    normDate.getMonth() + normDate.getDate() === 1
  )
    return "в " + normDate.getFullYear() + " году"

  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(normDate)
    .replace(/\u202F/g, " ")
}

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max))
}

export { useDebounce, swiperGridArrays, dateFormat, getRandomInt }
