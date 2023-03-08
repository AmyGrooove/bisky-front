import Link from 'next/link'

import AmyImage from '@/components/Common/AmyImage'

import styles from './index.module.scss'

const account = true

function RightNavigation() {
  return (
    <div className={styles.right}>
      {account ? (
        <Link href="#" className={styles.right__account}>
          <h2 className={styles.right__account_nickname}>AmyGrooove</h2>
          <AmyImage
            width={50}
            height={50}
            src="https://desu.shikimori.one/system/users/x160/424023.png?1601532742"
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
