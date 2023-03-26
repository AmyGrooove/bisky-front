import { useEffect, useState } from 'react'
import axios from 'axios'

import { IPosterAnime } from '@/supportingTool/types'
import { API_URL } from '@/supportingTool/constatns'

const useGenreBlock = (genre_id: number) => {
  const [animes, setAnimes] = useState<IPosterAnime[]>([])

  useEffect(() => {
    ShowNewPage()
  }, [])

  const ShowNewPage = async () => {
    setAnimes(
      (
        await axios.get<IPosterAnime[]>(
          API_URL + '/home/genres/anime?genre=' + genre_id,
        )
      ).data,
    )
  }

  return { animes }
}

export default useGenreBlock
