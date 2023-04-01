import Link from "next/link"
import { useRouter } from "next/router"
import { useContext } from "react"

import AmyImage from "@/components/Common/AmyImage"
import { AnimeInfoContext } from "@/pages/anime/[animeId]"

import styles from "./index.module.scss"

const MainImage = () => {
  const { query } = useRouter()
  const { poster, status } = useContext(AnimeInfoContext)

  return (
    <section className={styles.mainImage}>
      <div className={styles.mainImage_wrapper}>
        <AmyImage
          src={poster}
          width={250}
          height={360}
          imageType="poster"
          className={styles.mainImage_img}
        />
        {status !== "anons" && (
          <Link href={"/anime/" + query.animeId + "/player"}>
            <button className={styles.mainImage_button}>Смотреть</button>
          </Link>
        )}
        <button className={styles.mainImage_button}>Добавить в закладки</button>
      </div>
    </section>
  )
}

export default MainImage
