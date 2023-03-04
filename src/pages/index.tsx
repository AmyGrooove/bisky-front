import { GetServerSideProps } from 'next'

import { FactsType, PosterAnime, SeasonalAnime } from '@/supportingTool/types'
import { Seasonal } from '@/components/Home'
import { httpGet } from '@/supportingTool/functions'
import Facts from '@/components/Home/Facts'
import Best from '@/components/Home/Best'
import UserWatch from '@/components/Home/UserWatch'

import styles from './index.module.scss'

const account = true

interface IHome {
  SeasonalData: SeasonalAnime[];
  FactsData: string;
  BestData: PosterAnime[];
}

function Home({ SeasonalData, FactsData, BestData }: IHome) {
  return (
    <main className={styles.home}>
      <Seasonal data={SeasonalData} />
      <div className={styles.home__container}>
        {account && <UserWatch data={{ posterAnime: BestData, status: 'a' }} />}
      </div>
      <Best data={BestData} />
      <Facts data={FactsData} />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<IHome> = async () => {
  const [SeasonalData, FactsData, BestData] = await Promise.all([
    httpGet<SeasonalAnime[]>('/home/seasonal'),
    httpGet<FactsType>('/home/fact').then(({ fact }) => fact),
    httpGet<PosterAnime[]>('/home/best?page=1'),
  ])

  return { props: { SeasonalData, FactsData, BestData } }
}

export default Home
