"use client"

import Image from "next/image"
import Link from "next/link"

import { AnimeCard } from "@entities/Anime"
import { Text } from "@shared/ui/atoms"
import { Button } from "@shared/ui/molecules"
import { KingIcon } from "@shared/icons"

import { IUserAnimeListProps } from "../types/IUserAnimeListProps"
import { getNormalWatchStatus } from "../../../functions/getNormalStatus"
import { UserAnimeListLoading } from "../../UserAnimeListLoading"

import { useUserAnimeList } from "./useUserAnimeList"
import st from "./UserAnimeList.module.scss"

const UserAnimeList = (props: IUserAnimeListProps) => {
  const { username } = props

  const { isLoading, animesData, loadingBlockRef, session } =
    useUserAnimeList(props)

  return (
    <div className={st.root}>
      {session && session.username === username && (
        <div className={st.fastSelect}>
          <Text size="28" weight="700">
            Начать смотреть новое аниме из списка
          </Text>
          <Link href="/fastSelect">
            <Button leftIcon={<KingIcon />}>Быстрый выбор</Button>
          </Link>
        </div>
      )}
      <div className={st.animes}>
        {isLoading ? (
          <UserAnimeListLoading />
        ) : (
          <div className={st.animesWrapper}>
            {animesData.map((item) => (
              <div key={item._id} className={st.card}>
                <AnimeCard anime={item} />
                <Text
                  isDefaultColor={false}
                  className={st["status_" + item.userStatus]}
                >
                  {getNormalWatchStatus(item.userStatus)}
                </Text>
              </div>
            ))}
            {animesData.length % 40 === 0 && animesData.length !== 0 && (
              <div ref={loadingBlockRef}>
                <UserAnimeListLoading />
              </div>
            )}
            {animesData.length === 0 && (
              <div className={st.zeroResult}>
                <Image
                  width={118}
                  height={200}
                  src="/images/biskySmallCry.png"
                  alt=""
                />
                <Text size="20">Ничего нет в списке</Text>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export { UserAnimeList }
