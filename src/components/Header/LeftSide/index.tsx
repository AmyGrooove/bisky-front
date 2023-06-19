import Link from "next/link"

import { LogoIcon } from "@/Icons"

import styles from "./index.module.scss"

const LeftSide = () => {
  return (
    <div className={styles.leftSide}>
      <Link href="/" className={styles.leftSide__logo}>
        <LogoIcon size={50} />
        <h1 className={styles.leftSide__logo__text}>Bisky</h1>
      </Link>
      <div className={styles.leftSide__links}>
        <Link href="/" className={styles.leftSide__links__text}>
          Каталог
        </Link>
        <Link href="/" className={styles.leftSide__links__text}>
          Топы
        </Link>
      </div>
    </div>
  )
}

export default LeftSide
