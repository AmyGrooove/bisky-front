"use client"

import {
  AnimesCatalogLoading,
  catalogStyles as st,
  useCatalogFilter,
} from "@appData/catalog"
import { AnimeCard } from "@entities/Anime"
import { FilterBar } from "@features/FilterBar"

const CatalogPage = () => {
  const { animesData, isLoading, updateFilters, filterState } =
    useCatalogFilter()

  return (
    <div className={st.root}>
      {isLoading ? (
        <AnimesCatalogLoading />
      ) : (
        <div className={st.animesWrapper}>
          {animesData.map((item) => (
            <AnimeCard key={item._id} anime={item} />
          ))}
          <AnimesCatalogLoading />
        </div>
      )}
      <FilterBar updateFilters={updateFilters} filterState={filterState} />
    </div>
  )
}

export default CatalogPage
