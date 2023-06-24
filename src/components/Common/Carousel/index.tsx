"use client"

import { useCallback, useRef, useState } from "react"
import { Grid, Navigation, Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { useOnClickOutside } from "usehooks-ts"

import { ArrowIcon } from "@/Icons"
import { IAnimeInfo } from "@/types"
import { cl } from "@/utils"

import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import AnimePosterCard from "../AnimePosterCard"
import IconButton from "../IconButton"
import Title from "../Title"
import AppImage from "../AppImage"
import GenreCard from "../GenreCard"

import styles from "./index.module.scss"

interface ICarousel {
  variant: "AnimePosterCard" | "GenreCard" | "Screenshots"

  carouselData?: IAnimeInfo[] | string[] | any[]
  withTitle?: boolean
  title?: string
  rows?: number
  className?: string
}

const Carousel = ({
  variant,
  carouselData = [],
  withTitle = false,
  title = "",
  rows = 1,
  className,
}: ICarousel) => {
  const data: Partial<IAnimeInfo>[] = [
    {
      id: 1,
      status: "anons",
      scores: 1.3,
      episodes: {
        aired: 1,
        count: 2,
        duration: 213,
        nextEpisodeAt: null,
      },
      labels: ["1", "sada"],
    },
    {
      id: 1,
      status: "anons",
      scores: 1.3,
      episodes: {
        aired: 1,
        count: 2,
        duration: 213,
        nextEpisodeAt: null,
      },
      labels: ["2", "sada"],
    },
    {
      id: 1,
      status: "anons",
      scores: 1.3,
      episodes: {
        aired: 1,
        count: 2,
        duration: 213,
        nextEpisodeAt: null,
      },
      labels: ["3", "sada"],
    },
    {
      id: 1,
      status: "anons",
      scores: 1.3,
      episodes: {
        aired: 1,
        count: 2,
        duration: 213,
        nextEpisodeAt: null,
      },
      labels: ["4", "sada"],
    },
    {
      id: 1,
      status: "anons",
      scores: 1.3,
      episodes: {
        aired: 1,
        count: 2,
        duration: 213,
        nextEpisodeAt: null,
      },
      labels: ["5", "sada"],
    },
    {
      id: 1,
      status: "ongoing",
      scores: 1.3,
      episodes: {
        aired: 1,
        count: 2,
        duration: 213,
        nextEpisodeAt: null,
      },
      labels: ["6", "sada"],
    },
    {
      id: 1,
      status: "released",
      scores: 1.3,
      episodes: {
        aired: 1,
        count: 2,
        duration: 213,
        nextEpisodeAt: null,
      },
      labels: ["7", "sada"],
    },
    {
      id: 1,
      status: "released",
      scores: 1.3,
      episodes: {
        aired: 1,
        count: 2,
        duration: 213,
        nextEpisodeAt: null,
      },
      labels: ["8", "sada"],
    },
    {
      id: 1,
      status: "released",
      scores: 1.3,
      episodes: {
        aired: 1,
        count: 2,
        duration: 213,
        nextEpisodeAt: null,
      },
      labels: ["9", "sada"],
    },
    {
      id: 1,
      status: "released",
      scores: 1.3,
      episodes: {
        aired: 1,
        count: 2,
        duration: 213,
        nextEpisodeAt: null,
      },
      labels: ["10", "sada"],
    },
    {
      id: 1,
      status: "released",
      scores: 1.3,
      episodes: {
        aired: 1,
        count: 2,
        duration: 213,
        nextEpisodeAt: null,
      },
      labels: ["11", "sada"],
    },
  ]

  const swiperRef = useRef<SwiperType>()
  const [isBeginning, setIsBeginning] = useState<boolean>(true)
  const [isEnd, setIsEnd] = useState<boolean>(false)

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext()
  }, [])

  const [fullImage, setFullImage] = useState<string>("")

  const fullImageRef = useRef(null)

  const handleClickOutside = () => {
    setFullImage("")
  }

  useOnClickOutside(fullImageRef, handleClickOutside)

  const variants = {
    AnimePosterCard: carouselData.map((item, index) =>
      index > 36 ? null : (
        <SwiperSlide key={index} className={styles.carousel__item}>
          <AnimePosterCard anime={item} />
        </SwiperSlide>
      ),
    ),
    GenreCard: carouselData.map((item, index) => (
      <SwiperSlide key={index} className={styles.carousel__item}>
        <GenreCard
          title={item?.name?.ru ?? ""}
          imgSrc="57e7ed3ab8f60b2c5562827a1453aa8ef4ad7ba2"
        >
          это аниме о `попаданцах`, которые попали в другой
        </GenreCard>
      </SwiperSlide>
    )),
    Screenshots: carouselData.map((item, index) =>
      index > 10 ? null : (
        <SwiperSlide key={index} className={styles.carousel__item}>
          <AppImage
            alt={item as string}
            src={item as string}
            width={600}
            height={330}
            imageType="screenshot"
          />
        </SwiperSlide>
      ),
    ),
  }

  if (carouselData.length === 0) {
    return null
  }

  return (
    <div>
      {withTitle && (
        <div className={styles.navigation}>
          <Title order={2}>{title}</Title>
          <div className={styles.navigation__controls}>
            <IconButton
              variant="filled"
              icon={
                <ArrowIcon
                  size={20}
                  className={styles.navigation__controls_left}
                />
              }
              onClick={handlePrev}
              disabled={isBeginning}
            />
            <IconButton
              variant="filled"
              icon={
                <ArrowIcon
                  size={20}
                  className={styles.navigation__controls_right}
                />
              }
              onClick={handleNext}
              disabled={isEnd}
            />
          </div>
        </div>
      )}
      <Swiper
        className={cl(styles.carousel, className)}
        slidesPerView={"auto"}
        spaceBetween={30}
        grabCursor
        modules={[Navigation, Grid]}
        grid={{
          rows: rows,
          fill: "row",
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        onClick={(swiper) => {
          console.log(swiper)
          setFullImage(carouselData[swiper.clickedIndex] as string)
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }}
        onDragEnd={() => {
          setIsEnd((prev) => !prev)
        }}
        onReachEnd={() => {
          setIsEnd((prev) => !prev)
        }}
        onTouchEnd={() => {
          setIsEnd((prev) => !prev)
        }}
      >
        {variants[variant]}
      </Swiper>

      {/* {fullImage !== "" && (
        <div ref={fullImageRef}>
          <AppImage
            className={styles.fullImage}
            alt={fullImage as string}
            src={fullImage as string}
            width={600}
            height={330}
            imageType="screenshot"
          />
        </div>
      )} */}
    </div>
  )
}

export default Carousel
