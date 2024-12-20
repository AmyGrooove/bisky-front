"use client"

import { cn } from "@shared/utils/functions"
import { AnimeCardSlider } from "@features/AnimeCardSlider"
import { Skeleton } from "@shared/ui/atoms"
import { LinkLabel } from "@shared/ui/molecules"

import { IUserAnimeSliderProps } from "../types/IUserAnimeSliderProps"

import st from "./UserAnimeSlider.module.scss"
import { useUserAnimeSlider } from "./useUserAnimeSlider"

const UserAnimeSlider = (props: IUserAnimeSliderProps) => {
  const { isLoading, userAnimeData, username, className, otherProps } =
    useUserAnimeSlider(props)

  return isLoading ? (
    <div {...otherProps} className={cn(st.row, className)}>
      <Skeleton className={st.rowLabel} />
      <div className={st.rowSlider}>
        {[...Array(10)].map((_, index) => (
          <Skeleton key={index + "userSlide"} templates="posterCard" />
        ))}
      </div>
    </div>
  ) : userAnimeData && userAnimeData.length !== 0 ? (
    <div {...otherProps} className={cn(st.root, className)}>
      <LinkLabel
        label="Продолжить просмотр"
        linkText="В профиль"
        href={"/profile/" + username + "/animeList"}
      />
      <AnimeCardSlider items={userAnimeData.map((item) => item.base)} />
    </div>
  ) : (
    <></>
  )
}

export { UserAnimeSlider }
