import { useEffect, useState } from 'react'
import axios from 'axios'

import { IPosterAnime } from '../types'
import { API_URL } from '../constatns'

interface IUseGetAnimes {
  data?: IPosterAnime[];
  path?: string;
}

const useGetAnimes = ({ data, path }: IUseGetAnimes) => {
  const [page, setPage] = useState(1)
  const [animes, setAnimes] = useState<IPosterAnime[]>(data || [])

  useEffect(() => {
    if (animes.length === 0 && path !== undefined) {
      AddNewAnimes()
    }
  }, [animes, path])

  const AddNewAnimes = async () => {
    setAnimes(
      animes.concat(
        (
          await axios.get<IPosterAnime[]>(
            API_URL +
              path +
              '&page=' +
              Number(page + 1) +
              '&usedAnimes=' +
              animes.map((el) => el.shiki_id),
          )
        ).data,
      ),
    )

    setPage(page + 1)
  }

  return { animes, AddNewAnimes }
}

export default useGetAnimes
