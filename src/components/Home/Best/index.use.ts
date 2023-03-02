import { useState } from 'react'

import { httpGet } from '@/supportingTool/functions'
import { PosterAnime } from '@/supportingTool/types'

const useBest = (data: PosterAnime[]) => {
  const [bestPage, setBestPage] = useState(1)
  const [bestAnimes, setBestAnimes] = useState<PosterAnime[]>(data)

  const ShowNewPage = async () => {
    setBestAnimes(
      bestAnimes.concat(
        await httpGet<PosterAnime[]>('/home/best?page=' + Number(bestPage + 1)),
      ),
    )
    setBestPage(bestPage + 1)
  }

  return { bestAnimes, ShowNewPage }
}

export default useBest
