const createQueryString = (queryParams: Record<string, any>) => {
  const params = new URLSearchParams()

  Object.keys(queryParams).forEach((item) => {
    if (queryParams[item] === "" || !queryParams[item]) return

    params.set(item, queryParams[item])
  })

  return String(params)
}

export { createQueryString }
