import { SeasonalAnime } from '@/supportingTool/types'
import { Seasonal } from '@/components/Home'
import { http } from '@/supportingTool/functions'
import { API_URL } from '@/supportingTool/constatns'

import styles from './index.module.scss'

const account = true

interface IHome {
  SeasonalData: SeasonalAnime[];
}

function Home({ SeasonalData }: IHome) {
  return (
    <main className={styles.home}>
      <Seasonal data={SeasonalData} />
      <div className={styles.home__container}>
        {account && <section className={styles.home__watchNow}></section>}
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const SeasonalData = await http<SeasonalAnime[]>(API_URL + '/home/seasonal')

  return { props: { SeasonalData } }
}

export default Home
