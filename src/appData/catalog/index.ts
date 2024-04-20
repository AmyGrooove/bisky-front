import catalogStyles from "./styles/catalogPage.module.scss"
import catalogLoadingStyles from "./styles/catalogPageLoading.module.scss"

export { catalogStyles, catalogLoadingStyles }

export { useCatalogFilter } from "./hooks/useCatalogFilter/useCatalogFilter"
export type { IFilterState } from "./hooks/useCatalogFilter/IFilterState"

export { AnimesCatalogLoading } from "./ui/AnimesCatalogLoading"

export { filterStateDefaultValue } from "./static/filterStateDefaultValue"
