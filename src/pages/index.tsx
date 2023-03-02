import { FactsType, PosterAnime, SeasonalAnime } from '@/supportingTool/types'
import { Seasonal } from '@/components/Home'
import { httpGet } from '@/supportingTool/functions'
import Facts from '@/components/Home/Facts'
import Best from '@/components/Home/Best'

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
        {account && <section className={styles.home__watchNow}></section>}
      </div>
      <Best data={BestData} />
      <Facts data={FactsData} />
    </main>
  )
}

export async function getServerSideProps() {
  const SeasonalData = await httpGet<SeasonalAnime[]>('/home/seasonal')
  const FactsData = (await httpGet<FactsType>('/home/fact')).fact
  const BestData = await httpGet<PosterAnime[]>('/home/best?page=1')

  return { props: { SeasonalData, FactsData, BestData } }
}

export default Home
