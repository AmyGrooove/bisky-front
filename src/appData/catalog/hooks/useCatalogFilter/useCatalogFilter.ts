"use client"

import { useEffect, useReducer, useState } from "react"
import { useInView } from "react-intersection-observer"

import { IAnimeFullModel } from "@entities/Anime"
import { getCatalogAnimes } from "@appData/catalog/api"
import { filterStateDefaultValue } from "@appData/catalog"

import { filterStateReducer } from "./filterStateReducer"

const useCatalogFilter = () => {
  const [animesData, setAnimesData] = useState<IAnimeFullModel[]>([])

  const [isLoading, setIsLoading] = useState(true)

  const [filterState, dispatchFilter] = useReducer(
    filterStateReducer,
    filterStateDefaultValue,
  )

  const [loadingBlockRef, isLoadingBlockInView] = useInView()

  const fetchNewAnimesData = (isDefault = false) => {
    setIsLoading(true)

    getCatalogAnimes(isDefault ? filterStateDefaultValue : filterState)
      .then((response) => setAnimesData(response))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    if (isLoadingBlockInView && animesData.length !== 0) {
      dispatchFilter({
        type: "changePage",
        todo: { page: filterState.page + 1 },
      })

      getCatalogAnimes({ ...filterState, page: filterState.page + 1 }).then(
        (response) => setAnimesData((prevState) => [...prevState, ...response]),
      )
    }
  }, [isLoadingBlockInView])

  useEffect(() => {
    fetchNewAnimesData()
  }, [])

  return {
    isLoading,
    animesData,
    filterState,
    updateFilters: dispatchFilter,
    loadingBlockRef,
    fetchNewAnimesData,
  }
}

export { useCatalogFilter }
