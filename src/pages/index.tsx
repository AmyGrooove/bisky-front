import { GetServerSideProps } from 'next'

import {
  FactsType,
  PosterAnime,
  RusEngLabels,
  SeasonalAnime,
} from '@/supportingTool/types'
import { Genres, Facts, Seasonal } from '@/components/Home'
import { httpGet } from '@/supportingTool/functions'
import PosterSlider from '@/components/Common/PosterSlider'

import styles from './index.module.scss'

const account = true

interface IHome {
  SeasonalData: SeasonalAnime[];
  FactsData: string;
  BestData: PosterAnime[];
  AllGenres: RusEngLabels[];
}

const status = 'watch'

function Home({ SeasonalData, FactsData, BestData, AllGenres }: IHome) {
  return (
    <main className={styles.home}>
      <Seasonal data={SeasonalData} />
      {account && (
        <PosterSlider
          animes={BestData}
          label={status === 'watch' ? 'Продолжить просмотр' : 'Начать просмотр'}
          path="/home/best?"
        />
      )}
      <PosterSlider
        animes={BestData}
        label="Самое популярное"
        path="/home/best?"
        column
      />
      <Genres data={AllGenres} />
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
