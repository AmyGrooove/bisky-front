"use client"

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

import { Skeleton } from "@shared/ui/atoms/Skeleton"
import { cn } from "@shared/utils/functions"
import { getUserPublicDataQL, IAnimeEstimatesModel } from "@entities/User"

import { IUserDataProps } from "../../types/IUserDataProps"

import st from "./UserData.module.scss"
import { AddListButton } from "./AddListButton/AddListButton"

const UserData = (props: IUserDataProps) => {
  const { _id, className, ...otherProps } = props

  const { data: session } = useSession()

  const [isLoading, setIsLoading] = useState(true)
  const [userAnimeData, setUserAnimeData] =
    useState<IAnimeEstimatesModel | null>(null)

  const updateUserData = async () => {
    setIsLoading(true)

    if (session)
      getUserPublicDataQL({
        accessToken: session.accessToken,
        certainAnimeId: _id,
        _id: session?._id ?? null,
      })
        .then((response) =>
          setUserAnimeData(response?.animeEstimates[0] ?? null),
        )
        .finally(() => setIsLoading(false))
    else {
      setUserAnimeData(null)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    updateUserData()
  }, [session])

  return isLoading ? (
    <Skeleton className={cn(st.loading, className)} />
  ) : session ? (
    <div {...otherProps} className={cn(st.root, className)}>
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
