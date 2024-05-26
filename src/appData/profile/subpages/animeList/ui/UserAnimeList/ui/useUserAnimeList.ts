import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useSession } from "next-auth/react"

import { getCurrentUserData } from "@appData/profile/api"
import { removeDuplicates } from "@shared/utils/functions"

import { IUserAnimeListProps } from "../types/IUserAnimeListProps"
import { IAnimeSimpleModelWithStatus } from "../types/IAnimeSimpleModelWithStatus"

const useUserAnimeList = (props: IUserAnimeListProps) => {
  const { username } = props

  const { data: session } = useSession()

  const [isLoading, setIsLoading] = useState(true)

  const [loadingBlockRef, isLoadingBlockInView] = useInView()

  const [animesData, setAnimesData] = useState<IAnimeSimpleModelWithStatus[]>(
    [],
  )
  const [page, setPage] = useState(1)

  const fetchNewAnimesData = (isNewPage = false) => {
    if (!isNewPage) setIsLoading(true)

    getCurrentUserData({ username, page: isNewPage ? page + 1 : page })
      .then((response) =>
        setAnimesData((prevState) =>
          removeDuplicates([
            ...prevState,
            ...response.animeEstimates.map((item) => ({
              ...item.base,
              userStatus: item.status,
            })),
          ]),
        ),
      )
      .finally(() => setIsLoading(false))

    if (isNewPage) setPage((prevState) => prevState + 1)
  }

  useEffect(() => {
    if (isLoadingBlockInView && animesData.length !== 0)
      fetchNewAnimesData(true)
  }, [isLoadingBlockInView])

  useEffect(() => {
    fetchNewAnimesData()
  }, [])

  return { animesData, isLoading, loadingBlockRef, session }
}

export { useUserAnimeList }
