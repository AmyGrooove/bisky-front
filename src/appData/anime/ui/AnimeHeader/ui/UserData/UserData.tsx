import { Skeleton } from "@shared/ui/atoms"
import { cn } from "@shared/utils/functions"

import { IUserDataProps } from "../../types/IUserDataProps"

import st from "./UserData.module.scss"
import { AddListButton } from "./AddListButton/AddListButton"
import { SetScoreButton } from "./SetScoreButton/SetScoreButton"
import { useUserData } from "./useUserData"

const UserData = (props: IUserDataProps) => {
  const {
    isLoading,
    session,
    userAnimeData,
    updateUserData,
    className,
    otherProps,
    _id,
    animeStatus,
  } = useUserData(props)

  return isLoading ? (
    <Skeleton className={cn(st.loading, className)} />
  ) : session ? (
    <div {...otherProps} className={cn(st.root, className)}>
      {userAnimeData?.status && userAnimeData.status !== "added" && (
        <SetScoreButton
          animeScore={userAnimeData?.score}
          _id={_id ?? null}
          updateUserData={updateUserData}
        />
      )}
      <AddListButton
        animeStatus={animeStatus}
        userAnimeStatus={userAnimeData?.status ?? null}
        _id={_id ?? null}
        updateUserData={updateUserData}
      />
    </div>
  ) : (
    <></>
  )
}

export { UserData }
