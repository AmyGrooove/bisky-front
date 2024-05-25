const filterEnumValues = <T extends string>(
  values: string[] | undefined,
  enumType: { [key: string]: T },
): T[] => {
  if (!values) return []

  const enumValues = new Set(Object.values(enumType))
  return values.filter((value): value is T => enumValues.has(value as T))
}

export { filterEnumValues }
