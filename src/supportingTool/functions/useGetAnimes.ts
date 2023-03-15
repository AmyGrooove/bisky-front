import { useEffect, useState } from 'react'

import { PosterAnime } from '@/supportingTool/types'

import { httpGet } from './'

interface IUseGetAnimes {
  data?: PosterAnime[];
  path?: string;
}

const useGetAnimes = ({ data, path }: IUseGetAnimes) => {
  const [page, setPage] = useState(1)
  const [animes, setAnimes] = useState<PosterAnime[]>(data || [])

  useEffect(() => {
    if (animes.length === 0 && path !== undefined) {
      AddNewAnimes()
    }
  }, [animes, path])

  const AddNewAnimes = async () => {
    setAnimes(
      animes.concat(
        await httpGet<PosterAnime[]>(
          path +
            '&page=' +
            Number(page + 1) +
            '&usedAnimes=' +
            animes.map((el) => el.shiki_id),
        ),
      ),
    )

    setPage(page + 1)
  }

  return { animes, AddNewAnimes }
}

export default useGetAnimes
