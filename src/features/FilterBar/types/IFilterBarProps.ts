import { Dispatch, HTMLAttributes } from "react"

import { IFilterState } from "@appData/catalog"
import { ICatalogAnimesVariables } from "@entities/Anime"

interface IFilterBarProps extends HTMLAttributes<HTMLDivElement> {
  updateFilters: Dispatch<IFilterState>
  filterState: ICatalogAnimesVariables
}

export type { IFilterBarProps }
