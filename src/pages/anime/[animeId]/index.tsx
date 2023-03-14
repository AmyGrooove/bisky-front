import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'

import AmyImage from '@/components/Common/AmyImage'
import { getNormalKind, httpGet } from '@/supportingTool/functions'
import { AnimeInfo } from '@/supportingTool/types'
import { Info, MainImage, ScreenShot } from '@/components/AnimePage'
import { SHIKI_URL } from '@/supportingTool/constatns'

import styles from './index.module.scss'

interface IAnimePage {
  AnimeInfomation: AnimeInfo;
}

const AnimePage = ({ AnimeInfomation }: IAnimePage) => {
  return (
    <>
      <Head>
        <title>
          {AnimeInfomation.label.ru || AnimeInfomation.label.en} смотреть Аниме
          — Bisky
        </title>
        <meta
          name="description"
          content={
            (AnimeInfomation.label.ru || AnimeInfomation.label.en) +
            ' — ' +
            AnimeInfomation.description
          }
        />
        <meta
          name="keywords"
          content={
            (AnimeInfomation.label.ru || AnimeInfomation.label.en) +
            ' — ' +
            AnimeInfomation.description
          }
        />
        <link
          rel="image_src"
          href={
            AnimeInfomation.image
              ? SHIKI_URL +
                'system/animes/original/' +
                AnimeInfomation.image +
                '.jpg'
              : ''
          }
        />
      </Head>
      <main className={styles.animePage}>
        <MainImage data={AnimeInfomation.image || ''} />
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
  const { params } = context

  const [AnimeInfomation] = await Promise.all([
    httpGet<AnimeInfo | null>('/animePage?shiki_id=' + params?.animeId),
  ])

  return { props: { AnimeInfomation } }
}

export default AnimePage
