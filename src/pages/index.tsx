import { GetServerSideProps } from "next"
import axios from "axios"

import {
  IAllGenres,
  IPosterAnime,
  ISeasonalAnime,
} from "@/supportingTool/types"
import { Genres, Facts, Seasonal } from "@/components/Home"
import { API_URL } from "@/supportingTool/constatns"
import Best from "@/components/Home/Best"

import styles from "./index.module.scss"

interface IHome {
  SeasonalData: ISeasonalAnime[]
  FactsData: string
  BestData: IPosterAnime[]
  AllGenres: IAllGenres[]
}

function Home({ SeasonalData, FactsData, BestData, AllGenres }: IHome) {
  return (
    <main className={styles.home}>
      <Seasonal data={SeasonalData} />
      <Best data={BestData} />
      <Genres data={AllGenres} />
      <Facts data={FactsData} />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<IHome> = async () => {
  const [SeasonalData, FactsData, BestData, AllGenres] = [
    (await axios.get<ISeasonalAnime[]>(API_URL + "/home/seasonal")).data,
    (await axios.get<string>(API_URL + "/home/fact")).data,
    (await axios.get<IPosterAnime[]>(API_URL + "/home/best?page=1")).data,
    (await axios.get<IAllGenres[]>(API_URL + "/home/genres/all")).data,
  ]

  return { props: { SeasonalData, FactsData, BestData, AllGenres } }
}

export default Home
