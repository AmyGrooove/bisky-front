import {
  catalogLoadingStyles as st,
  AnimesCatalogLoading,
} from "@appData/catalog"
import { Skeleton } from "@shared/ui/atoms"

const CatalogLoading = () => {
  return (
    <div className={st.root}>
      <AnimesCatalogLoading />
      <Skeleton className={st.filterBar} />
    </div>
  )
}

export default CatalogLoading
