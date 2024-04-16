"use client"

import { useEffect, useReducer, useState } from "react"

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
      genres_ID: [],
      kind: [],
      rating: [],
      status: [],
      studios_ID: [],
    },
    filterExclude: {
      genres_ID: [],
      kind: [],
      rating: [],
      status: [],
      studios_ID: [],
    },
    sort: "scores",
  })

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
  }
}

export { useCatalogFilter }
