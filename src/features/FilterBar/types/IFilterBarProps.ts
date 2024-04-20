import { Dispatch, HTMLAttributes } from "react"

import { IFilterState } from "@appData/catalog"
import { ICatalogAnimesVariables } from "@entities/Anime"

interface IFilterBarProps extends HTMLAttributes<HTMLDivElement> {
  updateFilters: Dispatch<IFilterState>
  filterState: ICatalogAnimesVariables
  fetchNewAnimesData: (isDefault?: boolean) => void

  isAnimeFetching?: boolean
}

export type { IFilterBarProps }
