import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"

import { IAnimeEstimatesFullModel } from "@entities/AnimeEstimate"
import { getCurrentUserAnimeData } from "@appData/home/api"

import { IUserAnimeSliderProps } from "../types/IUserAnimeSliderProps"

const useUserAnimeSlider = (props: IUserAnimeSliderProps) => {
  const { className, ...otherProps } = props

  const { data: session } = useSession()

  const [isLoading, setIsLoading] = useState(true)
  const [userAnimeData, setUserAnimeData] = useState<
    IAnimeEstimatesFullModel[] | null
  >(null)

  useEffect(() => {
    setIsLoading(true)

    if (session)
      getCurrentUserAnimeData("watching")
        .then((response) => setUserAnimeData(response?.animeEstimates ?? null))
        .finally(() => setIsLoading(false))
    else {
      setUserAnimeData(null)
      setIsLoading(false)
    }
  }, [session])

  return {
    isLoading,
    userAnimeData,
    username: session?.username,
    className,
    otherProps,
  }
}

export { useUserAnimeSlider }
