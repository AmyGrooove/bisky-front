import { useEffect, useState } from 'react'
import { Swiper as ISwiper } from 'swiper/types'
import axios from 'axios'

import { swiperGridArrays } from '@/supportingTool/functions'
import { IPosterAnime } from '@/supportingTool/types'
import { API_URL } from '@/supportingTool/constatns'

import { IPosterSlider } from '.'

const usePosterSlider = ({ data, path, column, goToFull }: IPosterSlider) => {
  const [page, setPage] = useState(1)
  const [animes, setAnimes] = useState<IPosterAnime[]>(data || [])
  const [animesColumn, setAnimesColumn] = useState<{
    first: IPosterAnime[];
    second: IPosterAnime[];
  }>({ first: [], second: [] })

  useEffect(() => {
    if (column) setAnimesColumn(swiperGridArrays(animes))
    if (animes.length === 0) AddNewAnimes()
  }, [animes])

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

  const onSlideChange = (swiper: ISwiper) =>
    path && swiper.activeIndex + 6 >= swiper.slides.length - 1
      ? goToFull && animes.length >= 12
        ? () => {}
        : AddNewAnimes()
      : () => {}

  return {
    animes,
    animesColumn,
    onSlideChange,
  }
}

export default usePosterSlider
