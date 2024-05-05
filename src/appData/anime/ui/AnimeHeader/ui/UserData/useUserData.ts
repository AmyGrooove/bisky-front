import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"

import { IAnimeEstimatesModel } from "@entities/AnimeEstimate"
import { getCurrentUserAnimeEstimateData } from "@appData/anime/api"

import { IUserDataProps } from "../../types/IUserDataProps"

const useUserData = (props: IUserDataProps) => {
  const { _id } = props

  const { data: session } = useSession()

  const [isLoading, setIsLoading] = useState(true)
  const [userAnimeData, setUserAnimeData] =
    useState<IAnimeEstimatesModel | null>(null)

  const updateUserData = async () => {
    setIsLoading(true)

    if (session)
      getCurrentUserAnimeEstimateData({ animeId: _id, userId: session?._id })
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

  return { isLoading, session, userAnimeData, updateUserData }
}

export { useUserData }
