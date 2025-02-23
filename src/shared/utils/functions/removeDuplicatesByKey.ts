const removeDuplicatesByKey = <T extends Record<string, any>>(
  array: T[],
  key: keyof T,
): T[] =>
  array.filter(
    (item, index, self) =>
      self.findIndex((el) => el[key] === item[key]) === index,
  )

export { removeDuplicatesByKey }
