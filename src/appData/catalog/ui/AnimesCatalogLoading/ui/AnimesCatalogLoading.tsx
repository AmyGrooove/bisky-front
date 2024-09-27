import { Skeleton } from "@shared/ui/atoms"

import st from "./AnimesCatalogLoading.module.scss"

const AnimesCatalogLoading = () => (
  <div className={st.root}>
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
    <Skeleton templates="posterCard" />
  </div>
)

export { AnimesCatalogLoading }
