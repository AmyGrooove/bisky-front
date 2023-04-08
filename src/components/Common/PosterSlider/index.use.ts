import { useEffect, useState } from "react"
import { Swiper as ISwiper } from "swiper/types"

import { swiperGridArrays } from "@/supportingTool/functions"
import { IPosterAnime } from "@/supportingTool/types"
import useNewAnimes from "@/supportingTool/functions/useNewAnimes"

import { IPosterSlider } from "."

const usePosterSlider = ({ data, path, column, goToFull }: IPosterSlider) => {
  const { animes, addNewAnime } = useNewAnimes(path, data)

  const [animesColumn, setAnimesColumn] = useState<{
    first: IPosterAnime[]
    second: IPosterAnime[]
  }>({ first: [], second: [] })

  useEffect(() => {
    if (column) setAnimesColumn(swiperGridArrays(animes))
    if (animes.length === 0) addNewAnime()
  }, [animes, column])

  const onSlideChange = (swiper: ISwiper) =>
    path && swiper.activeIndex + 6 >= swiper.slides.length - 1
      ? goToFull && animes.length >= 12
        ? () => {}
        : addNewAnime()
      : () => {}

  return {
    animes,
    animesColumn,
    onSlideChange,
  }
}

export default usePosterSlider
