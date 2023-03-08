import { createContext, useState } from 'react'

import Search from './Search'
import styles from './index.module.scss'
import LeftNavigation from './LeftNavigation'
import RightNavigation from './RightNavigation'

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
          <LeftNavigation />
          <Search />
          <RightNavigation />
        </div>
      </header>
    </HeaderContext.Provider>
  )
}

export default Header
