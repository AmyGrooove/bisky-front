import Image from 'next/image'
import Link from 'next/link'

import { BISKY_LOGO } from '@/theme/sources'
import { links } from '@/constants'

import styles from './index.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header__left}>
          <Link href="/" className={styles.header__left__logo}>
            <Image
              src={BISKY_LOGO} alt="Bisky logo"
              width={32} height={48} />
            <h1 className={styles.header__left__logo_label}>Bisky</h1>
          </Link>
          <div className={styles.header__left__navigation}>
            {links.map((el) => (
              <Link
                key={el.name}
                href={el.href}
                className={styles.header__left__navigation_link}
              >
                {el.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.header__right}>
          <Link href="/login" className={styles.header__right__account}>
            Войти
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
