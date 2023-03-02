import Image from 'next/image'

import { BISKY_TIPS } from '@/theme/sources'

import styles from './index.module.scss'

interface IFacts {
  data: string;
}

const Facts = ({ data }: IFacts) => {
  return (
    <section className={styles.facts}>
      <div className={styles.facts__block}>
        <Image
          width={250}
          height={200}
          src={BISKY_TIPS}
          alt=""
          className={styles.facts__block_image}
        />
        <h1 className={styles.facts__block_text}>{data}</h1>
      </div>
    </section>
  )
}

export default Facts
