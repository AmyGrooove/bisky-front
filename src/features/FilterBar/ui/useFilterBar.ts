import { useEffect, useMemo, useState } from "react"

import { IGetAllGenresIdAndNamesResponse } from "@entities/Genre"
import { getAllGenresIdAndNames } from "@entities/Genre/api"
import { IGetAllStudiosIdAndNamesResponse } from "@entities/Studio"
import { getAllStudiosIdAndNames } from "@entities/Studio/api"

import { IFilterBarProps } from "../types/IFilterBarProps"
import { statusCheckboxFilterItems } from "../static/statusCheckboxFilterItems"
import { genresSetFilterTagsItems } from "../static/genresSetFilterTagsItems"
import { kindCheckboxFilterItems } from "../static/kindCheckboxFilterItems"
import { ratingCheckboxFilterItems } from "../static/ratingCheckboxFilterItems"
import { studioSetFilterTagsItems } from "../static/studioSetFilterTagsItems"

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

  const statusItems = useMemo(
    () => statusCheckboxFilterItems(filterState, updateFilters),
    [filterState.filterExclude.status, filterState.filterInclude.status],
  )
  const isStatusItemsIncludes = useMemo(
    () => statusItems.some((item) => item.isChecked || item.isExclude),
    [statusItems],
  )

  const kindItems = useMemo(
    () => kindCheckboxFilterItems(filterState, updateFilters),
    [filterState.filterExclude.kind, filterState.filterInclude.kind],
  )
  const isKindItemsIncludes = useMemo(
    () => kindItems.some((item) => item.isChecked || item.isExclude),
    [kindItems],
  )

  const ratingItems = useMemo(
    () => ratingCheckboxFilterItems(filterState, updateFilters),
    [filterState.filterExclude.rating, filterState.filterInclude.rating],
  )
  const isRatingItemsIncludes = useMemo(
    () => ratingItems.some((item) => item.isChecked || item.isExclude),
    [ratingItems],
  )

  const genresItems = useMemo(
    () => genresSetFilterTagsItems(genresData, filterState, updateFilters),
    [
      genresData,
      filterState.filterExclude.genres_ID_ONLY,
      filterState.filterInclude.genres_ID_ONLY,
    ],
  )
  const isGenresItemsIncludes = useMemo(
    () => genresItems.some((item) => item.isSelected),
    [genresItems],
  )

  const studioItems = useMemo(
    () => studioSetFilterTagsItems(studiosData, filterState, updateFilters),
    [
      studiosData,
      filterState.filterExclude.studios_ID_ONLY,
      filterState.filterInclude.studios_ID_ONLY,
    ],
  )
  const isStudioItemsIncludes = useMemo(
    () => studioItems.some((item) => item.isSelected),
    [studioItems],
  )

  const getData = async () => {
    setIsLoading(true)

    const newStudiosData = await getAllStudiosIdAndNames()
    const newGenresData = await getAllGenresIdAndNames()

    setStudiosData(newStudiosData)
    setGenresData(newGenresData)

    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    isLoading,
    updateFilters,
    filterState,
    fetchNewAnimesData,
    isAnimeFetching,
    statusItems,
    isStatusItemsIncludes,
    kindItems,
    isKindItemsIncludes,
    ratingItems,
    isRatingItemsIncludes,
    genresItems,
    isGenresItemsIncludes,
    studioItems,
    isStudioItemsIncludes,
  }
}

export { useFilterBar }
