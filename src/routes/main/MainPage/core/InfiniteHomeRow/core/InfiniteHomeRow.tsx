'use client'

import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { isNil } from '@shared/utils/functions'
import { Fragment, memo } from 'react'
import { AnimeCardCarousel } from '@entities/anime/ui/AnimeCardCarousel'
import { FactCard } from '@entities/fact/ui/FactCard'
import { HomeTip } from '@entities/home/ui/HomeTip'
import { ErrorBlock } from '@entities/home/ui/ErrorBlock'

import { IInfiniteHomeRowProps } from '../types/IInfiniteHomeRowProps'

import { useInfiniteHomeRow } from './useInfiniteHomeRow'

const InfiniteHomeRow = memo((props: IInfiniteHomeRowProps) => {
  const { data, inViewRef, isEnd, variant, error } = useInfiniteHomeRow(props)

  return (
    <>
      {data.map(({ type, collectionData, homeTipData, factData }, index) => {
        return (
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
        )
      })}
      {!isEnd && isNil(error) && (
        <>
          <Skeleton
            ref={inViewRef}
            templates="animeCardCarouselRow"
            variant={variant}
          />
          <Skeleton templates="animeCardCarouselRow" variant={variant} />
        </>
      )}
      <ErrorBlock error={error} />
    </>
  )
})

InfiniteHomeRow.displayName = 'InfiniteHomeRow'

export { InfiniteHomeRow }
