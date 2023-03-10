import { useState } from 'react'

import { RusEngLabels } from '@/supportingTool/types'

const useGenres = (data: RusEngLabels[]) => {
  const [animeBlock, setAnimeBlock] = useState<RusEngLabels[]>([data[0]])

  const addNewBlock = () => {
    if (data[animeBlock.length] !== undefined) {
      setAnimeBlock(animeBlock.concat([data[animeBlock.length]]))
    }
  }

  return { animeBlock, addNewBlock }
}

export default useGenres
