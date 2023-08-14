import { RandomFact, SeasonCarousel } from "@/05-pages"

import styles from "./index.module.scss"

const Page = async () => {
  return (
    <div className={styles.home}>
      <SeasonCarousel />
      <RandomFact />
    </div>
  )
}

export default Page
