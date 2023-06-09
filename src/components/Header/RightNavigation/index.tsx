import Link from "next/link"

import AmyImage from "@/components/common/AmyImage"

import styles from "./index.module.scss"

const account = false

function RightNavigation() {
  return (
    <div className={styles.right}>
      {account ? (
        <Link href="#" className={styles.right__account}>
          <span className={styles.right__account_nickname}>NULL</span>
          <AmyImage
            src=""
            width={50}
            height={50}
            className={styles.right__account_avatar}
          />
        </Link>
      ) : (
        <Link href="#" className={styles.right__button}>
          Войти
        </Link>
      )}
    </div>
  )
}

export default RightNavigation
