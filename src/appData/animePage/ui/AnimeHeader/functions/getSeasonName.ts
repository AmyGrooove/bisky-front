const seasons = ["Зима", "Весна", "Лето", "Осень"]

const getSeasonName = (value: Date | null | undefined) => {
  if (!value) return "null"

  const dateValue = new Date(value)

  return `${
    {
      0: seasons[0],
      1: seasons[0],
      2: seasons[1],
      3: seasons[1],
      4: seasons[1],
      5: seasons[2],
      6: seasons[2],
      7: seasons[2],
      8: seasons[3],
      9: seasons[3],
      10: seasons[3],
      11: seasons[0],
    }[dateValue.getMonth()]
  } ${dateValue.getFullYear()} г.`
}
export { getSeasonName }
