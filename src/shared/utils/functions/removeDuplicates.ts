const removeDuplicates = (arr: any[]) =>
  Array.from(new Set(arr.map((obj) => JSON.stringify(obj)))).map((str) =>
    JSON.parse(str),
  )

export { removeDuplicates }
