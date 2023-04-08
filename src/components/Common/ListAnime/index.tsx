import { useNewAnimes } from "@/supportingTool/functions"
import { IPosterAnime } from "@/supportingTool/types"

import LoadingIcon from "../LoadingIcon"

import styles from "./index.module.scss"
import Card from "./Card"


interface IListAnime {
  path?: string
  data?: IPosterAnime[]
}

const ListAnime = ({ path, data }: IListAnime) => {
  const { animes, addNewAnime } = useNewAnimes(path, data)

  return (
    <div className={styles.listAnime}>
      {animes.map((el) => (
        <Card key={el.shiki_id} anime={el} />
      ))}
      <LoadingIcon func={addNewAnime} />
    </div>
  )
}

export default ListAnime
