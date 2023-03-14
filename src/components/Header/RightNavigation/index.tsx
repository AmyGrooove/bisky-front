import Link from 'next/link'

import AmyImage from '@/components/Common/AmyImage'

import styles from './index.module.scss'

const account = false

function RightNavigation() {
  return (
    <div className={styles.right}>
      {account ? (
        <Link href="#" className={styles.right__account}>
          <h2 className={styles.right__account_nickname}>NULL</h2>
          <AmyImage
            width={50}
            height={50}
            src=""
            alt=""
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
