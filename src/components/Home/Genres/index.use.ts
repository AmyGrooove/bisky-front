import { useEffect, useState } from 'react'

import { IAllGenres } from '@/supportingTool/types'

const useGenres = (data: IAllGenres[]) => {
  const [allGenres, setAllGenres] = useState<IAllGenres[]>(data)

  const [animeBlock, setAnimeBlock] = useState<IAllGenres[]>([])

  useEffect(() => {
    addNewBlock(0, false)
  }, [data])

  const addNewBlock = (index: number, scroll = true) => {
    setAnimeBlock(animeBlock.concat([allGenres[index]]))
    setAllGenres(allGenres.filter((el, i) => i !== index))

    if (scroll) {
      window.scrollTo({ top: window.pageYOffset + 400, behavior: 'smooth' })
    }
  }

  return { animeBlock, addNewBlock, allGenres }
}

export default useGenres
