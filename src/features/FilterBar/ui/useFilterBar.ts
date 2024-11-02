import { useEffect, useState } from "react"

import { IGetAllGenresIdAndNamesResponse } from "@entities/Genre"
import { getAllGenresIdAndNames } from "@entities/Genre/api"
import { IGetAllStudiosIdAndNamesResponse } from "@entities/Studio"
import { getAllStudiosIdAndNames } from "@entities/Studio/api"

import { IFilterBarProps } from "../types/IFilterBarProps"

const useFilterBar = (props: IFilterBarProps) => {
  const {
    updateFilters,
    filterState,
    fetchNewAnimesData,
    isAnimeFetching = false,
  } = props

  const [studiosData, setStudiosData] = useState<
    IGetAllStudiosIdAndNamesResponse[]
  >([])
  const [genresData, setGenresData] = useState<
    IGetAllGenresIdAndNamesResponse[]
  >([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setIsLoading(true)

    const newStudiosData = await getAllStudiosIdAndNames()
    const newGenresData = await getAllGenresIdAndNames()

    setStudiosData(newStudiosData)
    setGenresData(newGenresData)

    setIsLoading(false)
  }

  return {
    studiosData,
    genresData,
    isLoading,
    updateFilters,
    filterState,
    fetchNewAnimesData,
    isAnimeFetching,
  }
}

export { useFilterBar }
