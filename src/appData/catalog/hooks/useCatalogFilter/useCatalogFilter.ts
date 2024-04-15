"use client"

import { useEffect, useReducer, useState } from "react"

import { IAnimeFullModel } from "@entities/Anime"
import { getCatalogAnimes } from "@appData/catalog/api"

import { filterStateReducer } from "./filterStateReducer"

const useCatalogFilter = () => {
  const [animesData, setAnimesData] = useState<IAnimeFullModel[]>([])
  const [pageCount, setPageCount] = useState(1)

  const [isLoading, setIsLoading] = useState(true)

  const [filterState, dispatchFilter] = useReducer(filterStateReducer, {
    page: pageCount,
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
      .then((response) =>
        setAnimesData((prevState) =>
          [...prevState, ...response].filter(
            (value, index, self) =>
              index === self.findIndex((t) => t._id === value._id),
          ),
        ),
      )
      .finally(() => setIsLoading(false))
  }, [filterState])

  return { isLoading, animesData, filterState, dispatchFilter }
}

export { useCatalogFilter }
