import Catalog from "./Catalog"
import styles from "./index.module.scss"

const Page = async () => {
  return (
    <div className={styles.anime}>
      <Catalog />
    </div>
  )
}

export default Page
