import Link from 'next/link'
import { createContext, useState } from 'react'

import { BISKY_LOGO } from '@/theme/sources'
import { links } from '@/supportingTool/constatns'

import AmyImage from '../Common/AmyImage'

import Search from './Search'
import styles from './index.module.scss'

export const HeaderContext = createContext({ bool: false, func: () => {} })

const account = true

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
              <AmyImage
                src={BISKY_LOGO} alt=""
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
            {account ? (
              <Link href="#" className={styles.header__right__account}>
                <h2 className={styles.header__right__account_nickname}>
                  AmyGrooove
                </h2>
                <AmyImage
                  width={50}
                  height={50}
                  src="https://desu.shikimori.one/system/users/x160/424023.png?1601532742"
                  alt=""
                  className={styles.header__right__account_avatar}
                />
              </Link>
            ) : (
              <Link href="#" className={styles.header__right__button}>
                Войти
              </Link>
            )}
          </div>
        </div>
      </header>
    </HeaderContext.Provider>
  )
}

export default Header
