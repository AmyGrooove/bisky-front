"use client"

import Link from "next/link"

import {
  AdditionalInfo,
  ErrorPage,
  LeftSideLoading,
  SelectionBlock,
  useFastFindPage,
} from "@appData/fastFind"
import { fastFindPageStyles as st } from "@appData/fastFind"
import { Text } from "@shared/ui/atoms"
import { Button, OversizeText } from "@shared/ui/molecules"
import { ScreenshotSlider } from "@appData/anime"
import { HeartIcon, KingIcon, ProfileIcon } from "@shared/icons"

import FastFindLoading from "./loading"

const FastFindPage = () => {
  const {
    isLoading,
    setIsChangingAnime,
    currentAnime,
    fastFindCount,
    setCurrentAnime,
    isChangingAnime,
    getNewAnimes,
    session,
  } = useFastFindPage()

  return !session ? (
    <ErrorPage />
  ) : isLoading ? (
    <FastFindLoading />
  ) : fastFindCount === 0 && !isChangingAnime ? (
    <div className={st.root}>
      <div className={st.newListWrapper}>
        <Text size="32" weight="700">
          Список окончен. Начнем просмотр?
        </Text>
        <div className={st.goNextOptions}>
          <Link href={"/profile/" + (session?.username ?? "") + "/animeList"}>
            <Button className={st.optionButton} leftIcon={<ProfileIcon />}>
              В профиль
            </Button>
          </Link>
          <Link href="/fastSelect">
            <Button className={st.optionButton} leftIcon={<KingIcon />}>
              Быстрый выбор
            </Button>
          </Link>
        </div>
        <Text size="28">или</Text>
        <Button onClick={() => getNewAnimes(true)} leftIcon={<HeartIcon />}>
          Новый список
        </Button>
      </div>
    </div>
  ) : (
    <div className={st.root}>
      {isChangingAnime ? (
        <LeftSideLoading />
      ) : (
        <div className={st.leftSide}>
          <Text size="32" weight="700" className={st.label}>
            {currentAnime.labels?.ru ?? ""}
          </Text>
          <AdditionalInfo currentAnime={currentAnime} />
          {currentAnime.description?.ru !== null && (
            <OversizeText size="16">
              {currentAnime.description?.ru ?? ""}
            </OversizeText>
          )}
          {currentAnime.screenshots?.length !== 0 && (
            <ScreenshotSlider
              items={currentAnime.screenshots ?? []}
              screenshotsSize={{ width: 400, height: 220 }}
            />
          )}
        </div>
      )}
      <SelectionBlock
        isChangingAnime={isChangingAnime}
        setIsChangingAnime={setIsChangingAnime}
        setCurrentAnime={setCurrentAnime}
        currentAnime={currentAnime}
        fastFindCount={fastFindCount}
      />
    </div>
  )
}

export default FastFindPage
