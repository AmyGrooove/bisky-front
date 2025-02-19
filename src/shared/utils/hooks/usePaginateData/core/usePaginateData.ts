import { useState, useCallback } from 'react'

import { TApiFunction } from '../types/TApiFunction'

const usePaginateData = <T>(apiFunction: TApiFunction<T>, initialPage = 1) => {
  const [page, setPage] = useState(initialPage)
  const [data, setData] = useState<T[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const loadNextPage = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const newData = await apiFunction(page)

      setData((prevData) => [...prevData, ...newData])
      setPage((prevPage) => prevPage + 1)
    } catch (error) {
      setError(new Error(String(error)))
    } finally {
      setIsLoading(false)
    }
  }, [apiFunction, page])

  return { data, loadNextPage, isLoading, error }
}

export { usePaginateData }
