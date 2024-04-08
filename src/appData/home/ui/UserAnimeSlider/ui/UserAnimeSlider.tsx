"use client"

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

import { AnimeCardSlider } from "@features/AnimeCardSlider"
import { LinkLabel } from "@shared/ui/molecules/LinkLabel"
import { Skeleton } from "@shared/ui/atoms/Skeleton"
import { cn } from "@shared/utils/functions"
import { getUserPublicDataQL, IUserPublicFullModel } from "@entities/User"

import { IUserAnimeSliderProps } from "../types/IUserAnimeSliderProps"

import st from "./UserAnimeSlider.module.scss"

const UserAnimeSlider = (props: IUserAnimeSliderProps) => {
  const { className, ...otherProps } = props

  const { data: session } = useSession()

  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState<IUserPublicFullModel | null>(null)

  useEffect(() => {
    setIsLoading(true)

    if (session)
      getUserPublicDataQL({
        accessToken: session.accessToken,
        _id: session?._id ?? null,
        animeListStatus: "watching",
      })
        .then((response) => setUserData(response))
        .finally(() => setIsLoading(false))
    else {
      setUserData(null)
      setIsLoading(false)
    }
  }, [session])

  return isLoading ? (
    <div {...otherProps} className={cn(st.row, className)}>
      <Skeleton className={st.rowLabel} />
      <div className={st.rowSlider}>
        <Skeleton className={st.rowCard} />
        <Skeleton className={st.rowCard} />
        <Skeleton className={st.rowCard} />
        <Skeleton className={st.rowCard} />
        <Skeleton className={st.rowCard} />
        <Skeleton className={st.rowCard} />
      </div>
    </div>
  ) : !!userData && userData.animeEstimates.length !== 0 ? (
    <div {...otherProps} className={cn(st.root, className)}>
      <LinkLabel label="Продолжить просмотр" linkText="В профиль" href="#" />
      <AnimeCardSlider
        items={userData.animeEstimates.map((item) => item.base)}
      />
    </div>
  ) : (
    <></>
  )
}

export { UserAnimeSlider }
