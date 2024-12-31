import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

import { getCurrentUserData } from "@appData/profile/api"
import { removeDuplicates } from "@shared/utils/functions"

import { IUserAnimeListProps } from "../types/IUserAnimeListProps"
import { IAnimeSimpleModelWithStatus } from "../types/IAnimeSimpleModelWithStatus"
import { TStatusButton } from "../types/IStatusButton"

const useUserAnimeList = (props: IUserAnimeListProps) => {
  const { username } = props

  const [isLoading, setIsLoading] = useState(true)

  const [loadingBlockRef, isLoadingBlockInView] = useInView()

  const [selectedStatus, setSelectedStatus] =
    useState<TStatusButton>("completed")
  const [animesData, setAnimesData] = useState<IAnimeSimpleModelWithStatus[]>(
    [],
  )
  const [page, setPage] = useState(1)

  const fetchNewAnimesData = (page = 1, status?: TStatusButton) => {
    const isNewPage = page !== 1

    if (!isNewPage) setIsLoading(true)

    getCurrentUserData({
      username,
      page: page,
      animeStatus: status ?? selectedStatus,
    })
      .then((response) => {
        if (isNewPage)
          setAnimesData((prevState) =>
            removeDuplicates([
              ...prevState,
              ...response.animeEstimates.map((item) => ({
                ...item.base,
                userStatus: item.status,
              })),
            ]),
          )
        else
          setAnimesData(
            removeDuplicates([
              ...response.animeEstimates.map((item) => ({
                ...item.base,
                userStatus: item.status,
              })),
            ]),
          )
      })
      .finally(() => setIsLoading(false))

    console.log(animesData)

    if (isNewPage) setPage(page)
  }

  const changeStatus = (status: TStatusButton) => {
    if (status === selectedStatus) return

    window.scrollTo({ top: 0, behavior: "smooth" })
    setSelectedStatus(status)
    setPage(1)
    fetchNewAnimesData(1, status)
  }

  useEffect(() => {
    if (isLoadingBlockInView && animesData.length !== 0)
      fetchNewAnimesData(page + 1)
  }, [isLoadingBlockInView])

  useEffect(() => {
    fetchNewAnimesData()
  }, [])

  return {
    animesData,
    isLoading,
    loadingBlockRef,
    selectedStatus,
    changeStatus,
  }
}

export { useUserAnimeList }
