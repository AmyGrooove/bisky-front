const cn = (...args: (string | undefined | null | Record<string, boolean>)[]) =>
  args
    .filter((item) => item !== undefined && item !== null)
    .map((item) =>
      typeof item === 'string'
        ? item
        : item
          ? Object.keys(item).filter((key) => item[key])
          : [],
    )
    .flat()
    .join(' ')

export { cn }
