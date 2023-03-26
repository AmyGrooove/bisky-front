import { useEffect, useState } from 'react'

import { IAllGenres } from '@/supportingTool/types'

const useGenres = (data: IAllGenres[]) => {
  const [allGenres, setAllGenres] = useState<IAllGenres[]>(data)

  const [animeBlock, setAnimeBlock] = useState<IAllGenres[]>([])

  useEffect(() => {
    addNewBlock(0)
  }, [data])

  const addNewBlock = (index: number) => {
    setAnimeBlock(animeBlock.concat([allGenres[index]]))
    setAllGenres(allGenres.filter((el, i) => i !== index))
  }

  return { animeBlock, addNewBlock, allGenres }
}

export default useGenres
