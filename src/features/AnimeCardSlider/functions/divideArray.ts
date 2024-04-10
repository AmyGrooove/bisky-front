const divideArray = <T>(array: T[]) => {
  const field1 = array.filter((_, index) => index % 2 === 0)
  const field2 = array.filter((_, index) => index % 2 === 1)

  return field1.map((item, index) => ({
    field1: item,
    field2: field2?.[index] ?? null,
  }))
}

export { divideArray }
