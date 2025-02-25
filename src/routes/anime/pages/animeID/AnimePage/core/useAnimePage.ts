import { useGetAnimeFullInfo } from '@entities/anime/api/getAnimeFullInfo'
import { useParams } from 'next/navigation'

const useAnimePage = () => {
  const { animeID } = useParams()

  const { data, isLoading } = useGetAnimeFullInfo(String(animeID))

  const franchiseHref = `/franchise/${data?.franchise ?? ''}`

  return { franchiseHref, data, isLoading }
}

export { useAnimePage }
