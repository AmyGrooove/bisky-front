import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

import { IAnimeSimpleModel } from "@entities/Anime"

import { getFastSelectAnimes } from "../api/getFastSelectAnimes"
import { ISelectAnime, ISelectPair } from "../types/ISelectPair"

const useFastSelectPage = () => {
  const { data: session } = useSession()

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [animesData, setAnimesData] = useState<IAnimeSimpleModel[]>([])

  const [winner, setWinner] = useState<ISelectAnime | null>(null)
  const [currentPair, setCurrentPair] = useState<ISelectPair>()
  const [nextArrayNumber, setNextArrayNumber] = useState(2)
  const [history, setHistory] = useState<ISelectPair[]>([])

  const selectChoice = (choice: "first" | "second") => {
    if (!currentPair) return

    if (nextArrayNumber + 1 <= animesData.length - 1)
      setHistory((prevState) => [...prevState, currentPair])

    if (choice === "first") {
      if (nextArrayNumber + 1 > animesData.length - 1) {
        setWinner(currentPair.choice1)
        return
      }

      setCurrentPair((prevState) => ({
        choice1: prevState?.choice1 ?? null,
        choice2: {
          arrayNumber: nextArrayNumber,
          animeData: animesData[nextArrayNumber],
        },
      }))
    } else {
      if (nextArrayNumber + 1 > animesData.length - 1) {
        setWinner(currentPair.choice2)
        return
      }

      setCurrentPair((prevState) => ({
        choice1: {
          arrayNumber: nextArrayNumber,
          animeData: animesData[nextArrayNumber],
        },
        choice2: prevState?.choice2 ?? null,
      }))
    }

    setNextArrayNumber((prevState) => prevState + 1)
  }

  const goBack = () => {
    if (winner !== null) {
      setWinner(null)
      return
    }

    setCurrentPair(history[history.length - 1])
    setHistory((prevState) => prevState.slice(0, -1))
    setNextArrayNumber((prevState) => prevState - 1)
  }

  const getNewAnimes = () => {
    if (!session?.username) setAnimesData([])
    else {
      setIsLoading(true)

      getFastSelectAnimes(session.username)
        .then((response) => {
          setAnimesData(response ?? [])

          if (response?.length && response.length < 2) setIsError(true)
          else {
            setIsError(false)

            setCurrentPair({
              choice1: { arrayNumber: 0, animeData: response[0] },
              choice2: { arrayNumber: 1, animeData: response[1] },
            })
          }
        })
        .finally(() => setIsLoading(false))
    }
  }

  useEffect(() => {
    if (animesData.length !== 0) return

    getNewAnimes()
  }, [session])

  return {
    isLoading,
    isSessionValid: session !== null,
    isError,
    currentPair,
    selectChoice,
    goBack,
    winner,
    animesCount: animesData.length,
    nextArrayNumber,
  }
}

export { useFastSelectPage }
