"use client"

import { Skeleton } from "@shared/ui/atoms"
import { cn } from "@shared/utils/functions"
import { EListStatus } from "@entities/AnimeEstimate"

import { IUserDataProps } from "../../types/IUserDataProps"

import st from "./UserData.module.scss"
import { AddListButton } from "./AddListButton/AddListButton"
import { SetScoreButton } from "./SetScoreButton/SetScoreButton"
import { useUserData } from "./useUserData"

const UserData = (props: IUserDataProps) => {
  const { _id, className, ...otherProps } = props

  const { isLoading, session, userAnimeData, updateUserData } =
    useUserData(props)

  return isLoading ? (
    <Skeleton className={cn(st.loading, className)} />
  ) : session ? (
    <div {...otherProps} className={cn(st.root, className)}>
      {userAnimeData?.status && userAnimeData.status !== EListStatus.added && (
        <SetScoreButton
          animeScore={userAnimeData?.score}
          _id={_id ?? null}
          updateUserData={updateUserData}
        />
      )}
      <AddListButton
        animeStatus={userAnimeData?.status ?? null}
        _id={_id ?? null}
        updateUserData={updateUserData}
      />
    </div>
  ) : (
    <></>
  )
}

export { UserData }
