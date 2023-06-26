import Title from "@/components/common/Title"

import Catalog from "./Catalog"
import styles from "./index.module.scss"

const Page = async () => {
  return (
    <div className={styles.anime}>
      <Title order={1} className={styles.anime__title}>
        Каталог
      </Title>
      <Catalog />
    </div>
  )
}

export default Page
