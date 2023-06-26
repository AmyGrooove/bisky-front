import { getRandomFact } from "@/services"
import { BISKY_TIPS } from "@/constants"
import AppImage from "@/components/common/AppImage"

import styles from "./index.module.scss"

const RandomFact = async () => {
  const randomFact = await getRandomFact()

  return (
    <div className={styles.randomFact}>
      <AppImage
        imageType="another"
        alt="BISKY_TIPS"
        src={BISKY_TIPS}
        width={200}
        height={166}
      />
      <p className={styles.randomFact__text}>{randomFact}</p>
    </div>
  )
}

export default RandomFact
