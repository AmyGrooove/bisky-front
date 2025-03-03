const normalizeDate = (value: Date | string) => {
  const convertedValue = new Date(value)

  return convertedValue.toLocaleDateString('ru-RU')
}

export { normalizeDate }
