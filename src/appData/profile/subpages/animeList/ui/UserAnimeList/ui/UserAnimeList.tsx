"use client"

import Image from "next/image"

import { AnimeCard } from "@entities/Anime"
import { Text } from "@shared/ui/atoms"
import { Button } from "@shared/ui/molecules"
import { cn } from "@shared/utils/functions"

import { IUserAnimeListProps } from "../types/IUserAnimeListProps"
import { getNormalWatchStatus } from "../../../functions/getNormalStatus"
import { UserAnimeListLoading } from "../../UserAnimeListLoading"
import { statusButton } from "../static/statusButton"

import { useUserAnimeList } from "./useUserAnimeList"
import st from "./UserAnimeList.module.scss"

const UserAnimeList = (props: IUserAnimeListProps) => {
  const {
    isLoading,
    animesData,
    loadingBlockRef,
    selectedStatus,
    changeStatus,
  } = useUserAnimeList(props)

  return (
    <div className={st.root}>
      <div className={st.statusButtons}>
        {statusButton.map((item) => (
          <Button
            key={item.status}
            rightIcon={item.icon}
            className={cn(st.status, {
              [st.status_selected]: selectedStatus === item.status,
            })}
            onClick={() => changeStatus(item.status)}
          >
            {getNormalWatchStatus(item.status)}
          </Button>
        ))}
      </div>
      <div className={st.animes}>
        {isLoading ? (
          <UserAnimeListLoading />
        ) : (
          <div className={st.animesWrapper}>
            {animesData.map((item) => (
              <AnimeCard key={item._id} anime={item} />
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
