const isNil = (value: unknown): value is null | undefined =>
  value === null || value === undefined

export { isNil }
