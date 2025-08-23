const cn = (...args: (string | null | undefined | Record<string, boolean>)[]) =>
  args
    .flatMap((item) =>
      typeof item === 'string'
        ? [item]
        : item
          ? Object.entries(item)
              .filter(([, value]) => value)
              .map(([key]) => key)
          : [],
    )
    .join(' ')

export { cn }
