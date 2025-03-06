import { SearchIcon } from '@shared/icons'
import { SectionSelector } from '@shared/ui/molecules/SectionSelector'
import st from './ListSections.module.scss'
import { useListSections } from './useListSections'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { AnimeCard } from '@entities/anime/ui/AnimeCard'
import { cn, getEmptyArray } from '@shared/utils/functions'
import Image from 'next/image'
import { Text } from '@shared/ui/atoms/Text'
import { InputField } from '@shared/ui/atoms/InputField'
import { sectionSelectorItems } from '../../static/setctionSelectorItems'

const ListSections = () => {
  const {
    activeTab,
    setActiveTab,
    data,
    isEnd,
    isLoading,
    loadingRef,
    searchValue,
    setSearchValue,
    isSearchValueEmpty,
  } = useListSections()

  return (
    <div className={st.root}>
      <SectionSelector
        items={sectionSelectorItems}
        activeTab={activeTab}
        onSwitchTab={setActiveTab}
        className={cn(st.selector, st.selector_desktop)}
      />
      <SectionSelector
        items={sectionSelectorItems}
        activeTab={activeTab}
        onSwitchTab={setActiveTab}
        className={cn(st.selector, st.selector_mobile)}
        elementsVariant="column"
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
