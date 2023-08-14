const cl = (...args: (string | undefined | false)[]) => {
  return args.filter((el) => el !== undefined && el !== false).join(" ")
}

export { cl }
