const apiFetchPost = async <TResponse = true>(
  url: URL,
  methodType: 'POST' | 'PATCH' | 'PUT' | 'DELETE',
  body?: Record<string, any>,
): Promise<TResponse> => {
  const token = localStorage.getItem('token')

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(url, {
    method: methodType,
    headers,
    credentials: 'include',
    body: JSON.stringify(body),
  })

  const responseData = await response.json()

  if (!response.ok) throw new Error(`${responseData.message}`)

  return responseData
}

export { apiFetchPost }
