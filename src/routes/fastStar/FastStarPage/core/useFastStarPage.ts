import { useGetAnimesFastStar } from '@entities/anime/api/getAnimesFastStar'
import { useSession } from '@entities/auth/hooks/useSession'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const useFastStarPage = () => {
  const { push } = useRouter()

  const { user } = useSession()

  const { data = [], isLoading, isError, refetch } = useGetAnimesFastStar()

  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0)

  const currentAnime = data[currentAnimeIndex]

  useEffect(() => {
    if (currentAnimeIndex === data.length && !isLoading && !isError) {
      refetch()
      setCurrentAnimeIndex(0)
    }

    if (isError) {
      push(`/user/${user?.username}/list?fastStar=true`)
    }
  }, [currentAnimeIndex, data, isLoading, isError])

  return { currentAnime, isLoading, isError }
}

export { useFastStarPage }
