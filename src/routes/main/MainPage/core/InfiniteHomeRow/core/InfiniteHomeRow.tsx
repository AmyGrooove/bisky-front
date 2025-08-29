'use client'

import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { cn, getEmptyArray, isNil } from '@shared/utils/functions'
import { Fragment, memo } from 'react'
import { AnimeCardCarousel } from '@entities/anime/ui/AnimeCardCarousel'
import { FactCard } from '@entities/fact/ui/FactCard'
import { HomeTip } from '@entities/home/ui/HomeTip'
import { ErrorBlock } from '@entities/home/ui/ErrorBlock'

import { IInfiniteHomeRowProps } from '../types/IInfiniteHomeRowProps'

import st from './InfiniteHomeRow.module.scss'
import { useInfiniteHomeRow } from './useInfiniteHomeRow'

const InfiniteHomeRow = memo((props: IInfiniteHomeRowProps) => {
  const { data, loadingRef, isEnd, variant, error } = useInfiniteHomeRow(props)

  return (
    <>
      {data.map(({ type, collectionData, factData, homeTipData }, index) => (
        <Fragment key={index}>
          {(type === 'genre' || type === 'official') &&
            !isNil(collectionData) && (
              <AnimeCardCarousel
                variant={variant}
                labelProps={{
                  label: collectionData?.collectionData.name,
                  link: {
                    label: 'В коллекцию',
                    href: `/collections/${collectionData?.collectionData.name}`,
                    watchAllType: 'anime',
                    isWatchListDisabled:
                      (collectionData?.animesData ?? []).length < 20,
                  },
                }}
                animesData={collectionData?.animesData ?? []}
              />
            )}
          {type === 'fact' && !isNil(factData) && (
            <FactCard variant={variant} {...factData} />
          )}
          {type === 'tip' && !isNil(homeTipData) && (
            <HomeTip variant={variant} type={homeTipData} />
          )}
        </Fragment>
      ))}
      {!isEnd && (
        <div ref={loadingRef} className={cn(st.row, st[`row_${variant}`])}>
          <Skeleton variant={variant} templates="sectionLabel" isLinkEnabled />
          <div className={cn(st.animeCards, st[`animeCards_${variant}`])}>
            {getEmptyArray(12).map((_, index) => (
              <Skeleton key={index} variant={variant} templates="animeCard" />
            ))}
          </div>
        </div>
      )}
      <ErrorBlock error={error} />
    </>
  )
})

InfiniteHomeRow.displayName = 'InfiniteHomeRow'

export { InfiniteHomeRow }
