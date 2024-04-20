"use client"

import Image from "next/image"

import {
  AnimesCatalogLoading,
  catalogStyles as st,
  useCatalogFilter,
} from "@appData/catalog"
import { AnimeCard } from "@entities/Anime"
import { FilterBar } from "@features/FilterBar"
import { Text } from "@shared/ui/atoms"

const CatalogPage = () => {
  const {
    animesData,
    isLoading,
    updateFilters,
    filterState,
    loadingBlockRef,
    fetchNewAnimesData,
  } = useCatalogFilter()

  return (
    <div className={st.root}>
      {isLoading ? (
        <AnimesCatalogLoading />
      ) : (
        <div className={st.animesWrapper}>
          {animesData.map((item) => (
            <AnimeCard key={item._id} anime={item} />
          ))}
          {animesData.length % 32 === 0 && animesData.length !== 0 && (
            <div ref={loadingBlockRef}>
              <AnimesCatalogLoading />
            </div>
          )}
          {animesData.length === 0 && (
            <div className={st.zeroResult}>
              <Image
                width={200}
                height={168}
                src="/images/biskyWarning.png"
                alt=""
                className={st.image}
              />
              <Text size="20">Ничего не найдено</Text>
            </div>
          )}
        </div>
      )}
      <FilterBar
        updateFilters={updateFilters}
        filterState={filterState}
        fetchNewAnimesData={fetchNewAnimesData}
        isAnimeFetching={isLoading}
      />
    </div>
  )
}

export default CatalogPage
