const getNormalDate = (value: Date | string) => {
  const convertedValue = new Date(value)

  const day = ("000" + convertedValue.getDate()).slice(-2)
  const month = ("000" + (convertedValue.getMonth() + 1)).slice(-2)
  const year = ("0000" + convertedValue.getFullYear()).slice(-4)

  return `${day}.${month}.${year}`
}

export { getNormalDate }
