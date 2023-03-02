import Image from 'next/image'
import Link from 'next/link'
import { createContext, useState } from 'react'

import { BISKY_LOGO } from '@/theme/sources'
import { links } from '@/supportingTool/constatns'

import Search from '../Search'

import styles from './index.module.scss'

export const HeaderContext = createContext({ bool: false, func: () => {} })

function Header() {
  const [onBack, setOnBack] = useState(false)

  return (
    <HeaderContext.Provider
      value={{ bool: onBack, func: () => setOnBack(!onBack) }}
    >
      <div
        className={`${styles.opactityBack} ${
          onBack && styles.opactityBack_active
        }`}
      />
      <header className={styles.header}>
        <div className={styles.header_container}>
          <div className={styles.header__left}>
            <Link href="/" className={styles.header__left__logo}>
              <Image
                src={BISKY_LOGO} alt="Bisky logo"
                width={48} height={48} />
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
          <Search />
          <div className={styles.header__right}>
            <Link href="/login" className={styles.header__right__account}>
              Войти
            </Link>
          </div>
        </div>
      </header>
    </HeaderContext.Provider>
  )
}

export default Header
