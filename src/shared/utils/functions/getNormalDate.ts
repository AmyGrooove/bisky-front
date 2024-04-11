const getNormalDate = (value: Date | string) => {
  const convertedValue = new Date(value)

  return `${("000" + convertedValue.getDate()).slice(-2)}.${("000" + convertedValue.getMonth() + 1).slice(-2)}.${("000" + convertedValue.getFullYear()).slice(-4)}`
}

export { getNormalDate }
