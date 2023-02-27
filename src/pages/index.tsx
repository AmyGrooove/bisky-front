import { FactsType, SeasonalAnime } from "@/supportingTool/types";
import { Seasonal } from "@/components/Home";
import { http } from "@/supportingTool/functions";
import { API_URL } from "@/supportingTool/constatns";

import styles from "./index.module.scss";
import Facts from "@/components/Home/Facts";

const account = true;

interface IHome {
  SeasonalData: SeasonalAnime[];
  FactsData: string;
}

function Home({ SeasonalData, FactsData }: IHome) {
  return (
    <main className={styles.home}>
      <Seasonal data={SeasonalData} />
      <div className={styles.home__container}>
        {account && <section className={styles.home__watchNow}></section>}
      </div>
      <Facts data={FactsData} />
    </main>
  );
}

export async function getServerSideProps() {
  const SeasonalData = await http<SeasonalAnime[]>(API_URL + "/home/seasonal");
  const FactsData = (await http<FactsType>(API_URL + "/home/fact")).fact;

  return { props: { SeasonalData, FactsData } };
}

export default Home;
