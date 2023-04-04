import axios from "axios"
import { GetServerSidePropsContext } from "next"
import Head from "next/head"

import { API_URL, KODIK_API_URL } from "@/supportingTool/constatns"
import {
  IAnimeInfo,
  IKodikPlayer,
  IKodikPlayerResult,
  INestError,
} from "@/supportingTool/types"

import styles from "./index.module.scss"

interface IPlayer {
  AnimeInfomation: IAnimeInfo
  KodikPlayer: IKodikPlayerResult
}

const Player = ({ AnimeInfomation, KodikPlayer }: IPlayer) => {
  return (
    <>
      <Head>
        <title>{AnimeInfomation.labels[0]} — смотреть Аниме — Bisky</title>
      </Head>
      <main className={styles.player}>
        <iframe
          src={KodikPlayer.link}
          title={AnimeInfomation.labels[0]}
          allowFullScreen
          className={styles.player__window}
        />
      </main>
    </>
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

  const KodikPlayer =
    "labels" in AnimeInfomation &&
    (await axios.get<IKodikPlayer>(KODIK_API_URL + AnimeInfomation.shiki_id))
      .data

  if (KodikPlayer && KodikPlayer.results.length === 0) {
    res.writeHead(302, { Location: "/404" })
    res.end()
  }

  return {
    props: {
      AnimeInfomation,
      KodikPlayer: KodikPlayer && KodikPlayer.results[0],
    },
  }
}

export default Player
