import { BISKY_TIPS } from "@/theme/sources"
import AmyImage from "@/components/Common/AmyImage"

import styles from "./index.module.scss"

interface IFacts {
  data: string
}

const Facts = ({ data }: IFacts) => {
  return (
    <section className={styles.facts}>
      <div className={styles.facts__block}>
        <AmyImage
          src={BISKY_TIPS}
          width={250}
          height={200}
          className={styles.facts__block_image}
        />
        <span className={styles.facts__block_text}>{data}</span>
      </div>
    </section>
  )
}

export default Facts
