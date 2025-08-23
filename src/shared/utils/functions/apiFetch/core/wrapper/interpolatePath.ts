const interpolatePath = (url: string, params?: Record<string, string>) => {
  const result = url.replace(/\{(\w+)\}/g, (_, key) =>
    encodeURIComponent(String(params?.[key] ?? '')),
  )

  return result
}

export { interpolatePath }
