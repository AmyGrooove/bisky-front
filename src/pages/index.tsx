import { HomeAnime } from "@/constants/types";
import { Seasonal } from "@/components/Home";
import { http } from "@/constants/functions";
import { API_URL } from "@/constants";

import styles from "./index.module.scss";

const account = true;

interface IHome {
  SeasonalData: HomeAnime[];
}

function Home({ SeasonalData }: IHome) {
  return (
    <main className={styles.home}>
      <Seasonal data={SeasonalData} />
      <div className={styles.home__container}>
        {account && <section className={styles.home__watchNow}></section>}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const SeasonalData = await http<HomeAnime[]>(API_URL + "/home/seasonal");

  return { props: { SeasonalData } };
}

export default Home;
