import { getEmptyArray } from '@shared/utils/functions'
import st from './FavoriteTab.module.scss'
import { useFavoriteTab } from './useFavoriteTab'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { Text } from '@shared/ui/atoms/Text'
import Image from 'next/image'
import { AnimeCard } from '@entities/anime/ui/AnimeCard'

const FavoriteTab = () => {
  const { data, isLoading, loadingRef, isEnd } = useFavoriteTab()

  return (
    <div className={st.root}>
      {data.map((animeData) => (
        <AnimeCard key={animeData._id} data={animeData} />
      ))}
      {(!isEnd || isLoading) && (
        <div className={st.loading} ref={loadingRef}>
          {getEmptyArray(9).map((_, index) => (
            <Skeleton key={index} templates="animeCard" />
          ))}
        </div>
      )}
      {data.length === 0 && !(!isEnd || isLoading) && (
        <div className={st.emptyWrapper}>
          <Image
            className={st.image}
            src="/images/biskyAttention.png"
            width={260}
            height={200}
            alt="biskyAttention"
          />
          <Text weight="700" className={st.emptyLabel}>
            Избранных аниме нет
          </Text>
        </div>
      )}
    </div>
  )
}

export { FavoriteTab }
