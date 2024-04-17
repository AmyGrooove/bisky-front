import { useEffect, useState } from "react"

import { IGetAllGenresIdAndNamesResponse } from "@entities/Genre"
import { getAllGenresIdAndNames } from "@entities/Genre/api"
import { IGetAllStudiosIdAndNamesResponse } from "@entities/Studio"
import { getAllStudiosIdAndNames } from "@entities/Studio/api"

const useFilterBar = () => {
  const [studiosData, setStudiosData] = useState<
    IGetAllStudiosIdAndNamesResponse[]
  >([])
  const [genresData, setGenresData] = useState<
    IGetAllGenresIdAndNamesResponse[]
  >([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    getAllStudiosIdAndNames().then((response) => setStudiosData(response))

    getAllGenresIdAndNames()
      .then((response) => setGenresData(response))
      .finally(() => setIsLoading(false))
  }, [])

  return { studiosData, genresData, isLoading }
}

export { useFilterBar }
