"use client"

import { useEffect, useReducer, useState } from "react"
import { useInView } from "react-intersection-observer"

import { IAnimeFullModel } from "@entities/Anime"
import { getCatalogAnimes } from "@appData/catalog/api"

import { filterStateReducer } from "./filterStateReducer"

const useCatalogFilter = () => {
  const [animesData, setAnimesData] = useState<IAnimeFullModel[]>([])

  const [isLoading, setIsLoading] = useState(true)

  const [filterState, dispatchFilter] = useReducer(filterStateReducer, {
    page: 1,
    dates_airedOn: { from: 1000, to: 3000 },
    filterInclude: {
      genres_ID_ONLY: [],
      kind: [],
      rating: [],
      status: [],
      studios_ID_ONLY: [],
    },
    filterExclude: {
      genres_ID_ONLY: [],
      kind: [],
      rating: [],
      status: [],
      studios_ID_ONLY: [],
    },
    sort: "scores",
  })

  const [loadingBlockRef, isLoadingBlockInView] = useInView()

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
    setIsLoading(true)

    getCatalogAnimes(filterState)
      .then((response) => setAnimesData(response))
      .finally(() => setIsLoading(false))
  }, [filterState.filterExclude, filterState.filterInclude])

  return {
    isLoading,
    animesData,
    filterState,
    updateFilters: dispatchFilter,
    loadingBlockRef,
  }
}

export { useCatalogFilter }
