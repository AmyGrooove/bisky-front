import { GetServerSidePropsContext } from 'next'

import AmyImage from '@/components/Common/AmyImage'
import { httpGet } from '@/supportingTool/functions'
import { AnimeInfo } from '@/supportingTool/types'
import { Info, MainImage, ScreenShot } from '@/components/AnimePage'

import styles from './index.module.scss'

interface IAnimePage {
  AnimeInfomation: AnimeInfo;
}

const AnimePage = ({ AnimeInfomation }: IAnimePage) => {
  return (
    <main className={styles.animePage}>
      <MainImage data={AnimeInfomation.image || ''} />
      <div className={styles.animePage__info}>
        <Info data={AnimeInfomation} />
        <ScreenShot />
      </div>
    </main>
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
