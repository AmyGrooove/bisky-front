const cn = (...args: (string | Record<string, boolean>)[]) =>
  args
    .map((item) =>
      typeof item === "string"
        ? item
        : Object.keys(item).filter((key) => item[key]),
    )
    .flat()
    .join(" ")

export { cn }
