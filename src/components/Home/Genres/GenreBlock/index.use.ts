import { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'

import { IPosterAnime } from '@/supportingTool/types'
import { API_URL } from '@/supportingTool/constatns'

import { GenresContext } from '..'


const useGenreBlock = (genre_id: number) => {
  const { addNewBlock } = useContext(GenresContext)
  const targetRef = useRef<HTMLDivElement>(null)

  const [animes, setAnimes] = useState<IPosterAnime[]>([])

  useEffect(() => {
    ShowNewPage()

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addNewBlock()

          observer.disconnect()
        }
      })
    })

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      observer.disconnect()
    }
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

  return { targetRef, animes }
}

export default useGenreBlock
