import { useContext, useEffect, useRef, useState } from 'react'

import { httpGet } from '@/supportingTool/functions'
import { PosterAnime } from '@/supportingTool/types'

import { GenresContext } from '..'

const useGenreBlock = (genre: string) => {
  const { addNewBlock } = useContext(GenresContext)
  const targetRef = useRef<HTMLDivElement>(null)

  const [animes, setAnimes] = useState<PosterAnime[]>([])

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
      await httpGet<PosterAnime[]>('/home/genres/anime?genre=' + genre),
    )
  }

  return { targetRef, animes }
}

export default useGenreBlock
