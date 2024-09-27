"use client"

import { useEffect, useReducer, useState } from "react"
import { useInView } from "react-intersection-observer"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { IAnimeFullModel } from "@entities/Anime"
import { getCatalogAnimes } from "@appData/catalog/api"
import { filterStateDefaultValue, getParams } from "@appData/catalog"
import { createQueryString } from "@shared/utils/functions"

import { filterStateReducer } from "./filterStateReducer"

const useCatalogFilter = () => {
  const pathname = usePathname()
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
    fetchNewAnimesData("params")
  }, [])

  useEffect(() => {
    if (isLoading || filterState.sort === searchParams.get("sort")) return

    fetchNewAnimesData()
  }, [filterState.sort])

  useEffect(() => {
    if (isLoading) return

    const query = {
      datesFrom: filterState.dates_airedOn.from,
      datesTo: filterState.dates_airedOn.to,
      genres: filterState.filterInclude.genres_ID_ONLY.join(","),
      kind: filterState.filterInclude.kind.join(","),
      rating: filterState.filterInclude.rating.join(","),
      status: filterState.filterInclude.status.join(","),
      studios: filterState.filterInclude.studios_ID_ONLY.join(","),
      genresNot: filterState.filterExclude.genres_ID_ONLY.join(","),
      kindNot: filterState.filterExclude.kind.join(","),
      ratingNot: filterState.filterExclude.rating.join(","),
      statusNot: filterState.filterExclude.status.join(","),
      studiosNot: filterState.filterExclude.studios_ID_ONLY.join(","),
      sort: filterState.sort,
    }

    const newParams = createQueryString(query)

    router.push(`${pathname}?${newParams}`)
  }, [filterState])

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
