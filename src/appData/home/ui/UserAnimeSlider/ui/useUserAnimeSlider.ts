import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"

import { IAnimeEstimatesFullModel } from "@entities/AnimeEstimate"
import { getUserPublicDataQL } from "@entities/User/api"

const useUserAnimeSlider = () => {
  const { data: session } = useSession()

  const [isLoading, setIsLoading] = useState(true)
  const [userAnimeData, setUserAnimeData] = useState<
    IAnimeEstimatesFullModel[] | null
  >(null)

  useEffect(() => {
    setIsLoading(true)

    if (session)
      getUserPublicDataQL({
        animeListStatus: "watching",
      })
        .then((response) => setUserAnimeData(response?.animeEstimates ?? null))
        .finally(() => setIsLoading(false))
    else {
      setUserAnimeData(null)
      setIsLoading(false)
    }
  }, [session])

  return { isLoading, userAnimeData }
}

export { useUserAnimeSlider }
