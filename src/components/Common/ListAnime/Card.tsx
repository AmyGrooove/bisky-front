import Link from "next/link"

import { IPosterAnime } from "@/supportingTool/types"

import Poster from "../Poster"

import styles from "./index.module.scss"

interface ICard {
  anime: IPosterAnime
}

const Card = ({ anime }: ICard) => {
  return (
    <Link href={"/anime/" + anime.shiki_id} className={styles.card}>
      <Poster shiki_id={anime.shiki_id} poster={anime.poster} />
      <div>
        <h2>{anime.labels[0]}</h2>
        <h3>{anime.rating}</h3>
      </div>
    </Link>
  )
}

export default Card
