import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import axios from 'axios'

import { IAnimeInfo, INestError } from '@/supportingTool/types'
import { Info, MainImage, ScreenShot } from '@/components/AnimePage'
import { API_URL, SHIKI_URL } from '@/supportingTool/constatns'

import styles from './index.module.scss'

interface IAnimePage {
  AnimeInfomation: IAnimeInfo;
}

const AnimePage = ({ AnimeInfomation }: IAnimePage) => {
  return (
    <>
      <Head>
        <title>{AnimeInfomation.labels[0]} смотреть Аниме — Bisky</title>
        <meta name="description" content={AnimeInfomation.labels[0]} />
        <link
          rel="image_src"
          href={
            AnimeInfomation.poster
              ? SHIKI_URL +
                'system/animes/original/' +
                AnimeInfomation.poster +
                '.jpg'
              : ''
          }
        />
      </Head>
      <main className={styles.animePage}>
        <MainImage data={AnimeInfomation.poster || ''} />
        <div className={styles.animePage__info}>
          <Info data={AnimeInfomation} />
          <ScreenShot />
        </div>
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
      API_URL + '/animePage?shiki_id=' + params?.animeId,
    )
  ).data

  if (AnimeInfomation.status === 404) {
    res.writeHead(302, { Location: '/404' })
    res.end()
  }

  return { props: { AnimeInfomation } }
}

export default AnimePage
