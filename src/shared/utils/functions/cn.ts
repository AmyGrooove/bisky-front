const cn = (...args: (string | undefined | Record<string, boolean>)[]) =>
  args
    .filter((item) => item !== undefined)
    .map((item) =>
      typeof item === "string"
        ? item
        : Object.keys(item).filter((key) => item[key]),
    )
    .flat()
    .join(" ")

export { cn }
