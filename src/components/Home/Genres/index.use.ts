import { useEffect, useRef, useState } from 'react'

import { IAllGenres } from '@/supportingTool/types'

const useGenres = (data: IAllGenres[]) => {
  const [allGenres, setAllGenres] = useState<IAllGenres[]>(data)

  const [animeBlock, setAnimeBlock] = useState<IAllGenres[]>([])

  const genreBlockRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    addNewBlock(0, false)
  }, [data])

  const addNewBlock = (index: number, scroll = true) => {
    const asyncAddNewBlock = new Promise((resolve, reject) => {
      setAnimeBlock(animeBlock.concat([allGenres[index]]))
      setAllGenres(allGenres.filter((el, i) => i !== index))

      resolve(true)
    })

    setAnimeBlock(animeBlock.concat([allGenres[index]]))
    setAllGenres(allGenres.filter((el, i) => i !== index))

    if (scroll) {
      asyncAddNewBlock.then(() => {
        window.scrollBy({
          top: genreBlockRef.current
            ? genreBlockRef.current?.offsetHeight
            : 300,
          behavior: 'smooth',
        })
      })
    }
  }

  return { animeBlock, addNewBlock, allGenres, genreBlockRef }
}

export default useGenres
