"use client"

import { useEffect, useReducer, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useRouter, useSearchParams } from "next/navigation"

import { IAnimeFullModel } from "@entities/Anime"
import { getCatalogAnimes } from "@appData/catalog/api"
import { filterStateDefaultValue, getParams } from "@appData/catalog"

import { filterStateReducer } from "./filterStateReducer"

const useCatalogFilter = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [animesData, setAnimesData] = useState<IAnimeFullModel[]>([])

  const [isLoading, setIsLoading] = useState(true)

  const [filterState, dispatchFilter] = useReducer(
    filterStateReducer,
    filterStateDefaultValue,
  )

  const [loadingBlockRef, isLoadingBlockInView] = useInView()

  const fetchNewAnimesData = (mode: "default" | "params" | "none" = "none") => {
    setIsLoading(true)

    if (mode === "params" && searchParams.toString() !== "") {
      const queryObject = getParams(searchParams)

      dispatchFilter({
        type: "addFilter",
        todo: { filter: queryObject.filterInclude },
      })
      dispatchFilter({
        type: "excludeFilter",
        todo: { filter: queryObject.filterExclude },
      })
      dispatchFilter({
        type: "changeSort",
        todo: { sort: queryObject.sort },
      })
      dispatchFilter({
        type: "changeDate",
        todo: { dates_airedOn: queryObject.dates_airedOn },
      })

      router.replace("/catalog")

      getCatalogAnimes({ ...filterState, ...queryObject })
        .then((response) => setAnimesData(response))
        .finally(() => setIsLoading(false))
    } else {
      getCatalogAnimes(
        mode === "default" ? filterStateDefaultValue : filterState,
      )
        .then((response) => setAnimesData(response))
        .finally(() => setIsLoading(false))
    }
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
    fetchNewAnimesData("params")
  }, [filterState.sort])

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
