import { Title } from "@/01-shared/ui/Title"
import { Catalog } from "@/05-pages/anime"

import styles from "./page.module.scss"

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
