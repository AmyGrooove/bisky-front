import { GetServerSideProps } from "next"
import axios from "axios"

import {
  IAllGenres,
  IPosterAnime,
  ISeasonalAnime,
} from "@/supportingTool/types"
import { Genres, Facts, Seasonal } from "@/components/desktop/Home"
import { API_URL } from "@/supportingTool/constatns"
import Best from "@/components/desktop/Home/Best"
import useWindowSize from "@/supportingTool/functions/useWindowSize"
import Home_Mobile from "@/components/mobile/Home"

import styles from "./index.module.scss"

interface IHome {
  SeasonalData: ISeasonalAnime[]
  BestData: IPosterAnime[]
  AllGenres: IAllGenres[]
  LastData: IPosterAnime[]
  FactsData: string
}

function Home({
  SeasonalData,
  BestData,
  AllGenres,
  LastData,
  FactsData,
}: IHome) {
  const { mobile } = useWindowSize()

  return (
    <>
      {mobile ? (
        <Home_Mobile
          SeasonalData={SeasonalData}
          BestData={BestData}
          AllGenres={AllGenres}
          LastData={LastData}
        />
      ) : (
        <main className={styles.home}>
          <Seasonal data={SeasonalData} />
          <Best data={BestData} />
          <Genres data={AllGenres} />
          <Facts data={FactsData} />
        </main>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps<IHome> = async () => {
  const [SeasonalData, BestData, AllGenres, LastData, FactsData] = [
    (await axios.get<ISeasonalAnime[]>(API_URL + "/home/seasonal")).data,
    (await axios.get<IPosterAnime[]>(API_URL + "/home/best")).data,
    (await axios.get<IAllGenres[]>(API_URL + "/home/genres/all")).data,
    (await axios.get<IPosterAnime[]>(API_URL + "/home/last")).data,
    (await axios.get<string>(API_URL + "/home/fact")).data,
  ]

  return { props: { SeasonalData, BestData, AllGenres, LastData, FactsData } }
}

export default Home
