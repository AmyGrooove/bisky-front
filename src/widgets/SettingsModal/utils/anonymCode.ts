const anonymCode = (value: string) => {
  const visiblePart = value.slice(0, 2)
  const maskedPart = '*'.repeat(value.length - 2)

  return visiblePart + maskedPart
}

export { anonymCode }
