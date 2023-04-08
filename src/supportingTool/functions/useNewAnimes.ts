import axios from "axios"
import { useState } from "react"

import { API_URL } from "../constatns"
import { IPosterAnime } from "../types"

const useNewAnimes = (path?: string, data?: IPosterAnime[]) => {
  const [page, setPage] = useState(data ? 1 : 0)
  const [animes, setAnimes] = useState<IPosterAnime[]>(data || [])

  const addNewAnime = async () => {
    if (path) {
      setAnimes(
        animes.concat(
          (
            await axios.get<IPosterAnime[]>(
              API_URL +
                path +
                "&page=" +
                page +
                "&usedAnimes=" +
                animes.map((el) => el.shiki_id),
            )
          ).data,
        ),
      )
      setPage(page + 1)
    }
  }

  return { animes, addNewAnime }
}

export default useNewAnimes
