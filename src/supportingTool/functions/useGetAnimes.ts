import { useEffect, useState } from 'react'

import { httpGet, swiperGridArrays } from '@/supportingTool/functions'
import { PosterAnime } from '@/supportingTool/types'

interface IUseGetAnimes {
  data: PosterAnime[];
  path: string;
  usedAnimes?: boolean;
  column?: boolean;
}

const useGetAnimes = ({ data, path, usedAnimes, column }: IUseGetAnimes) => {
  const [page, setPage] = useState(1)
  const [getAnimes, setGetAnimes] = useState<PosterAnime[]>(data)

  const [firstAnimes, setFirstAnimes] = useState<PosterAnime[]>(
    swiperGridArrays(getAnimes).firstArr,
  )
  const [secondAnimes, setSecondAnimes] = useState<PosterAnime[]>(
    swiperGridArrays(getAnimes).secondArr,
  )

  useEffect(() => {
    if (column) {
      setFirstAnimes(swiperGridArrays(getAnimes).firstArr)
      setSecondAnimes(swiperGridArrays(getAnimes).secondArr)
    }
  }, [getAnimes])

  const ShowNewPage = async () => {
    setGetAnimes(
      getAnimes.concat(
        await httpGet<PosterAnime[]>(
          path +
            '&page=' +
            Number(page + 1) +
            (usedAnimes
              ? '&usedAnimes=' + getAnimes.map((el) => el.shiki_id).slice(-12)
              : ''),
        ),
      ),
    )

    setPage(page + 1)
  }

  return { getAnimes, ShowNewPage, firstAnimes, secondAnimes }
}

export default useGetAnimes
