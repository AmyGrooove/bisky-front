import catalogPageStyles from "./styles/catalogPage.module.scss"
import catalogLoadingStyles from "./styles/catalogLoading.module.scss"

export { useCatalogFilter } from "./hooks/useCatalogFilter/useCatalogFilter"
export type { IFilterState } from "./hooks/useCatalogFilter/IFilterState"

export { AnimesCatalogLoading } from "./ui/AnimesCatalogLoading"

export { filterStateDefaultValue } from "./static/filterStateDefaultValue"

export { catalogPageStyles, catalogLoadingStyles }
