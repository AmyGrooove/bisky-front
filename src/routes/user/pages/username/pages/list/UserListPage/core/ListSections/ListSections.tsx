import {
  CheckIcon,
  CirclePlayIcon,
  EyeIcon,
  SearchIcon,
  TrashIcon,
} from '@shared/icons'
import { SectionSelector } from '@shared/ui/molecules/SectionSelector'
import st from './ListSections.module.scss'
import { useListSections } from './useListSections'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { AnimeCard } from '@entities/anime/ui/AnimeCard'
import { getEmptyArray } from '@shared/utils/functions'
import Image from 'next/image'
import { Text } from '@shared/ui/atoms/Text'
import { InputField } from '@shared/ui/atoms/InputField'

const ListSections = () => {
  const {
    activeTab,
    setActiveTab,
    isMobile,
    data,
    isEnd,
    isLoading,
    loadingRef,
    searchValue,
    setSearchValue,
    isSearchValueEmpty,
    isOneTimeLoaded,
  } = useListSections()

  if (isLoading && !isOneTimeLoaded)
    return (
      <div className={st.loadingWrapper}>
        <Skeleton className={st.loadingButtons} />
        <Skeleton className={st.loadingInput} />
        <Skeleton className={st.loadingMain} />
      </div>
    )

  return (
    <div className={st.root}>
      <SectionSelector
        items={[
          { Icon: EyeIcon, children: 'Добавлен' },
          { Icon: CirclePlayIcon, children: 'Смотрю' },
          { Icon: CheckIcon, children: 'Просмотрен' },
          { Icon: TrashIcon, children: 'Брошен' },
        ]}
        activeTab={activeTab}
        onSwitchTab={setActiveTab}
        className={st.selector}
        elementsVariant={isMobile ? 'column' : 'row'}
      />
      <div className={st.section}>
        <InputField
          value={searchValue}
          onChange={setSearchValue}
          Icon={SearchIcon}
          placeholder="Название аниме"
        />
        <div className={st.main}>
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
              {!isSearchValueEmpty && (
                <Text weight="700" className={st.emptyLabel}>
                  Ничего не найдено
                </Text>
              )}
              {isSearchValueEmpty ? (
                <Image
                  className={st.image}
                  src="/images/biskyAttention.png"
                  width={260}
                  height={200}
                  alt="biskyAttention"
                />
              ) : (
                <Image
                  className={st.image}
                  src="/images/biskySmallCry.png"
                  width={160}
                  height={160}
                  alt="biskySmallCry"
                />
              )}
              <Text weight="700" className={st.emptyLabel}>
                {!isSearchValueEmpty ? 'Измените запрос' : 'Аниме в списке нет'}
              </Text>
            </div>
          )}
        </div>
        <div className={st.barMargin} />
      </div>
    </div>
  )
}

export { ListSections }
