'use client'

import { InputField } from '@shared/ui/atoms/InputField'
import { Fragment } from 'react'
import st from './SearchModule.module.scss'
import { CrownIcon, DonutIcon, SearchIcon } from '@shared/icons'
import Image from 'next/image'
import { Text } from '@shared/ui/atoms/Text'
import { BigButton } from '@shared/ui/molecules/BigButton'
import Link from 'next/link'
import { getEmptyArray } from '@shared/utils/functions'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { AvatarElement } from '../../AvatarElement'
import { AnimeCard } from '@entities/anime/ui/AnimeCard'
import { closeModal } from '@widgets/ModalWrapper'
import { useSearchModule } from './useSearchModule'

const SearchModule = () => {
  const {
    animes,
    users,
    isLoading,
    setSearchValue,
    searchValue,
    debouncedSearchValue,
  } = useSearchModule()

  return (
    <div className={st.root}>
      <InputField
        Icon={SearchIcon}
        className={st.input}
        value={searchValue}
        onChange={setSearchValue}
        placeholder="Название аниме или имя пользователя"
      />
      {searchValue.trim() === '' ? (
        <div className={st.info}>
          <div className={st.main}>
            <Image
              className={st.image}
              src="/images/biskyOpenMouth.png"
              width={160}
              height={160}
              alt="biskyOpenMouth"
            />
            <Text weight="700" className={st.mainText}>
              Введите название аниме или имя пользователя
            </Text>
          </div>
          <Text isCustomColor className={st.orText} weight="700">
            или воспользуйтесь
          </Text>
          <div className={st.buttons}>
            <Link href="/fastFind" className={st.button}>
              <BigButton
                variant="big"
                className={st.button}
                Icon={DonutIcon}
                onClick={() => {}}
              >
                Быстрый поиск
              </BigButton>
            </Link>
            <Link href="/fastSelect" className={st.button}>
              <BigButton
                variant="big"
                className={st.button}
                Icon={CrownIcon}
                onClick={() => {}}
              >
                Быстрый выбор
              </BigButton>
            </Link>
          </div>
        </div>
      ) : isLoading || debouncedSearchValue !== searchValue ? (
        <div className={st.result}>
          <div className={st.users}>
            {getEmptyArray(3).map((_, index) => (
              <Skeleton
                key={index}
                templates="avatarElement"
                className={st.avatarSkeleton}
              />
            ))}
          </div>
          <div className={st.separator} />
          <div className={st.animes}>
            {getEmptyArray(9).map((_, index) => (
              <Skeleton key={index} templates="animeCard" />
            ))}
          </div>
        </div>
      ) : animes.length === 0 && users.length === 0 ? (
        <div className={st.info}>
          <div className={st.main}>
            <Text weight="700" className={st.mainText}>
              Ничего не найдено
            </Text>
            <Image
              className={st.image}
              src="/images/biskySmallCry.png"
              width={160}
              height={160}
              alt="biskySmallCry"
            />
            <Text weight="700" className={st.mainText}>
              Измените запрос
            </Text>
          </div>
          <Text isCustomColor className={st.orText} weight="700">
            или воспользуйтесь
          </Text>
          <div className={st.buttons}>
            <Link href="/fastFind" className={st.button}>
              <BigButton
                variant="big"
                className={st.button}
                Icon={DonutIcon}
                onClick={() => {}}
              >
                Быстрый поиск
              </BigButton>
            </Link>
            <Link href="/fastSelect" className={st.button}>
              <BigButton
                variant="big"
                className={st.button}
                Icon={CrownIcon}
                onClick={() => {}}
              >
                Быстрый выбор
              </BigButton>
            </Link>
          </div>
        </div>
      ) : (
        <div className={st.result}>
          {users.length !== 0 && (
            <div className={st.users} onClick={() => closeModal()}>
              {users.map((userInfo) => (
                <Fragment key={userInfo.username}>
                  <AvatarElement
                    variant="small"
                    data={userInfo}
                    className={st.avatar_small}
                  />
                  <AvatarElement
                    variant="big"
                    data={userInfo}
                    className={st.avatar_big}
                  />
                </Fragment>
              ))}
            </div>
          )}
          {users.length !== 0 && animes.length !== 0 && (
            <div className={st.separator} />
          )}
          {animes.length !== 0 && (
            <div className={st.animes}>
              {animes.map((animeInfo) => (
                <div key={animeInfo._id} onClick={() => closeModal()}>
                  <AnimeCard data={animeInfo} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export { SearchModule }
