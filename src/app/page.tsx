import { RandomFact, SeasonCarousel, NewSeriesCarousel } from "@/05-pages/home"

import styles from "./index.module.scss"

const Page = () => {
  return (
    <div className={styles.home}>
      <SeasonCarousel />
      <NewSeriesCarousel />
      <RandomFact />
    </div>
  )
}

export default Page
