import { useState } from 'react'

import { IAllGenres } from '@/supportingTool/types'

const useGenres = (data: IAllGenres[]) => {
  const [animeBlock, setAnimeBlock] = useState<IAllGenres[]>([data[0]])

  const addNewBlock = () => {
    if (data[animeBlock.length] !== undefined) {
      setAnimeBlock(animeBlock.concat([data[animeBlock.length]]))
    }
  }

  return { animeBlock, addNewBlock }
}

export default useGenres
