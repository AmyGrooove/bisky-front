import LabelSelect from "@/components/Common/LabelSelect"
import ListAnime from "@/components/Common/ListAnime"
import {
  IAllGenres,
  IPosterAnime,
  ISeasonalAnime,
} from "@/supportingTool/types"

import styles from "./index.module.scss"

interface IHome_Mobile {
  SeasonalData: ISeasonalAnime[]
  BestData: IPosterAnime[]
  AllGenres: IAllGenres[]
  LastData: IPosterAnime[]
}

const Home_Mobile = ({ LastData, BestData }: IHome_Mobile) => {
  return (
    <main className={styles.home}>
      <LabelSelect
        labels={["Онгоинги", "Новое", "Популярное", "Жанры"]}
        elements={[
          <div key="Новое">12</div>,
          <ListAnime key="last" data={LastData} path="/home/last?" />,
          <ListAnime key="best" data={BestData} path="/home/best?" />,
          <div key="Жанры">14</div>,
        ]}
        startPage={1}
      />
    </main>
  )
}

export default Home_Mobile
