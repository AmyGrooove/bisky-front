import { useEffect, useState } from 'react'
import { Swiper as ISwiper } from 'swiper/types'

import { swiperGridArrays } from '@/supportingTool/functions'
import useGetAnimes from '@/supportingTool/functions/useGetAnimes'
import { PosterAnime } from '@/supportingTool/types'

const usePosterSlider = (
  options: {
    path?: string;
    column?: boolean;
    goToFull?: string;
  },
  data?: PosterAnime[],
) => {
  const { animes, AddNewAnimes } = useGetAnimes({
    data,
    path: options ? options.path : undefined,
  })

  const [firstAnimes, setFirstAnimes] = useState<PosterAnime[]>(
    swiperGridArrays(animes).firstArr,
  )
  const [secondAnimes, setSecondAnimes] = useState<PosterAnime[]>(
    swiperGridArrays(animes).secondArr,
  )

  useEffect(() => {
    if (options && options.column) {
      setFirstAnimes(swiperGridArrays(animes).firstArr)
      setSecondAnimes(swiperGridArrays(animes).secondArr)
    }
  }, [animes, options])

  const onBeforeInit = (swiper: ISwiper) =>
    swiper.slides.length === 0 && AddNewAnimes()

  const onSlideChange = (swiper: ISwiper) =>
    options.goToFull && 12 <= animes.length
      ? () => {}
      : swiper.activeIndex >= swiper.slides.length - 6 && AddNewAnimes()

  return {
    getAnimes: animes,
    onBeforeInit,
    onSlideChange,
    firstAnimes,
    secondAnimes,
  }
}

export default usePosterSlider
