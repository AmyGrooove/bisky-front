import { GetServerSidePropsContext } from "next"
import Head from "next/head"
import axios from "axios"
import { createContext, useEffect, useState } from "react"

import { IAnimeInfo, INestError } from "@/supportingTool/types"
import { Info, MainImage, ScreenShot } from "@/components/AnimePage"
import { API_URL, SHIKI_URL } from "@/supportingTool/constatns"
import Relations from "@/components/AnimePage/Relations"

import styles from "./index.module.scss"

interface IAnimePage {
  AnimeInfomation: IAnimeInfo
}

export const AnimeInfoContext = createContext<IAnimeInfo>({
  shiki_id: 0,
  labels: [],
  poster: null,
  kind: "tv",
  scores: [],
  status: "released",
  episodes: { count: null, aired: null, duration: 0, next_episode_at: null },
  dates: { aired_on: null, released_on: null },
  rating: "none",
  description: null,
  screenshots: [],
  videos: [],
  genres: [],
  studios: [],
  relations: { franchise: null, animes: [] },
})

const AnimePage = ({ AnimeInfomation }: IAnimePage) => {
  const [reload, setReload] = useState(false)

  useEffect(() => {
    setReload(false)

    setTimeout(() => {
      setReload(true)
    }, 1)
  }, [AnimeInfomation])

  return (
    <AnimeInfoContext.Provider
      value={{
        shiki_id: AnimeInfomation.shiki_id,
        labels: AnimeInfomation.labels,
        poster: AnimeInfomation.poster,
        kind: AnimeInfomation.kind,
        scores: AnimeInfomation.scores,
        status: AnimeInfomation.status,
        episodes: AnimeInfomation.episodes,
        dates: AnimeInfomation.dates,
        rating: AnimeInfomation.rating,
        description: AnimeInfomation.description,
        screenshots: AnimeInfomation.screenshots,
        videos: AnimeInfomation.videos,
        genres: AnimeInfomation.genres,
        studios: AnimeInfomation.studios,
        relations: AnimeInfomation.relations,
      }}
    >
      {reload && (
        <>
          <Head>
            <title>{AnimeInfomation.labels[0]} — смотреть Аниме — Bisky</title>
            <meta name="description" content={AnimeInfomation.labels[0]} />
            <link
              rel="image_src"
              href={
                AnimeInfomation.poster
                  ? SHIKI_URL +
                    "system/animes/original/" +
                    AnimeInfomation.poster +
                    ".jpg"
                  : ""
              }
            />

            <title>
              {AnimeInfomation.labels[0] + " — смотреть Аниме — Bisky"}
            </title>
            <meta
              name="description"
              content={AnimeInfomation.description || ""}
            />
            <meta
              name="url"
              content={"https://bisky.one/anime/" + AnimeInfomation.shiki_id}
            />

            <link
              rel="image_src"
              href={
                AnimeInfomation.poster
                  ? SHIKI_URL +
                    "system/animes/original/" +
                    AnimeInfomation.poster +
                    ".jpg"
                  : ""
              }
            />

            <meta
              name="og:title"
              content={AnimeInfomation.labels[0] + " — смотреть Аниме — Bisky"}
            />
            <meta
              name="og:description"
              content={AnimeInfomation.description || ""}
            />
            <meta
              name="og:url"
              content={"https://bisky.one/anime/" + AnimeInfomation.shiki_id}
            />
            <meta
              name="og:image"
              content={
                AnimeInfomation.poster
                  ? SHIKI_URL +
                    "system/animes/original/" +
                    AnimeInfomation.poster +
                    ".jpg"
                  : ""
              }
            />
          </Head>
          <main className={styles.animePage}>
            <MainImage />
            <div className={styles.animePage__info}>
              <Info />
              <Relations />
              <ScreenShot />
            </div>
          </main>
        </>
      )}
    </AnimeInfoContext.Provider>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { params, res } = context

  const AnimeInfomation = (
    await axios.get<IAnimeInfo | INestError>(
      API_URL + "/animePage?shiki_id=" + params?.animeId,
    )
  ).data

  if (AnimeInfomation.status === 404) {
    res.writeHead(302, { Location: "/404" })
    res.end()
  }

  return { props: { AnimeInfomation } }
}

export default AnimePage
