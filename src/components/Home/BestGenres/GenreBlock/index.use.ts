import { useContext, useEffect, useRef, useState } from 'react'

import { httpGet } from '@/supportingTool/functions'
import { PosterAnime } from '@/supportingTool/types'

import { BestGenresContext } from '..'

const useGenreBlock = (genre: string) => {
  const { addNewBlock } = useContext(BestGenresContext)
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
      animes.concat(
        await httpGet<PosterAnime[]>(
          '/home/genres/anime?genre=' +
            genre +
            '&usedAnimes=' +
            animes.map((el) => el.shiki_id),
        ),
      ),
    )
  }

  return { targetRef, ShowNewPage, animes }
}

export default useGenreBlock
