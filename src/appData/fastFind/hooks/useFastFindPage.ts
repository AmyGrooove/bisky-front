import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

import { IAnimeFullModel } from "@entities/Anime"

import { getFastFindAnimes } from "../api"
import { maxFastFind } from "../static/maxFastFind"

const useFastFindPage = () => {
  const { data: session } = useSession()

  const [isLoading, setIsLoading] = useState(true)
  const [animesData, setAnimesData] = useState<IAnimeFullModel[]>([])

  const [isChangingAnime, setIsChangingAnime] = useState(false)
  const [currentAnime, setCurrentAnime] = useState(0)

  const getNewAnimes = (isRefresh = false) => {
    if (session === null) setAnimesData([])
    else {
      setIsLoading(true)
      if (isRefresh) setCurrentAnime(0)

      getFastFindAnimes()
        .then((response) => setAnimesData(response ?? []))
        .finally(() => setIsLoading(false))
    }
  }

  useEffect(() => {
    if (animesData.length !== 0) return

    getNewAnimes()
  }, [session])

  return {
    getNewAnimes,
    isLoading,
    currentAnime: animesData[currentAnime],
    fastFindCount: maxFastFind - currentAnime,
    setCurrentAnime,
    setIsChangingAnime,
    isChangingAnime,
    isSessionValid: session !== null,
  }
}

export { useFastFindPage }
