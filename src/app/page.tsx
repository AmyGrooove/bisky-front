import { RandomFact, SeasonCarousel } from "@/components/pages/home"

import styles from "./index.module.scss"

const Home = async () => {
  return (
    <div className={styles.home}>
      <SeasonCarousel />
      <RandomFact />
    </div>
  )
}

export default Home
