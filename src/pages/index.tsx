import { GetServerSideProps } from 'next'

import {
  FactsType,
  PosterAnime,
  RusEngLabels,
  SeasonalAnime,
} from '@/supportingTool/types'
import { Seasonal } from '@/components/Home'
import { httpGet } from '@/supportingTool/functions'
import Facts from '@/components/Home/Facts'
import Best from '@/components/Home/Best'
import UserWatch from '@/components/Home/UserWatch'
import BestGenres from '@/components/Home/BestGenres'

import styles from './index.module.scss'

const account = true

interface IHome {
  SeasonalData: SeasonalAnime[];
  FactsData: string;
  BestData: PosterAnime[];
  AllGenres: RusEngLabels[];
}

function Home({ SeasonalData, FactsData, BestData, AllGenres }: IHome) {
  return (
    <main className={styles.home}>
      <Seasonal data={SeasonalData} />
      {account && <UserWatch data={{ posterAnime: BestData, status: 'a' }} />}
      <Best data={BestData} />
      <BestGenres data={AllGenres} />
      <Facts data={FactsData} />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<IHome> = async () => {
  const [SeasonalData, FactsData, BestData, AllGenres] = await Promise.all([
    httpGet<SeasonalAnime[]>('/home/seasonal'),
    httpGet<FactsType>('/home/fact').then(({ fact }) => fact),
    httpGet<PosterAnime[]>('/home/best?page=1'),
    httpGet<RusEngLabels[]>('/home/genres/all'),
  ])

  return { props: { SeasonalData, FactsData, BestData, AllGenres } }
}

export default Home
