import { AppImage } from "@/01-shared/ui/AppImage"
import { getRandomFact } from "@/02-entities/fact"
import { BISKY_TIPS } from "@/01-shared/data"

import styles from "./RandomFact.module.scss"

const RandomFact = async () => {
  const randomFact = await getRandomFact()

  return (
    <div className={styles.randomFact}>
      <AppImage alt="BISKY_TIPS" src={BISKY_TIPS} width={200} height={166} />
      <p className={styles.factInfo}>{randomFact}</p>
    </div>
  )
}

export { RandomFact }
