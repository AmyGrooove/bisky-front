import { GetServerSideProps } from 'next'

import {
  FactsType,
  PosterAnime,
  RusEngLabels,
  SeasonalAnime,
} from '@/supportingTool/types'
import { Genres, Facts, Seasonal } from '@/components/Home'
import { httpGet } from '@/supportingTool/functions'
import PosterSliderBlock from '@/components/Common/PosterSliderBlock'

import styles from './index.module.scss'

const account = false
const status = 'watch'

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
      {account && (
        <PosterSliderBlock
          data={BestData}
          label={status === 'watch' ? 'Продолжить просмотр' : 'Начать просмотр'}
          options={{
            path: '/home/best?',
          }}
        />
      )}
      <PosterSliderBlock
        data={BestData}
        label="Самое популярное"
        options={{
          path: '/home/best?',
          column: true,
        }}
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
