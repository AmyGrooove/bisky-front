const cn = (...args: (string | undefined | false)[]) =>
  args.filter((el) => el !== undefined && el !== false).join(" ")

export { cn }
