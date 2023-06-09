import { ReactNode } from "react"

import styles from "./index.module.scss"
import LeftNavigation from "./LeftNavigation"
import RightNavigation from "./RightNavigation"
import Search from "./Search"

interface IHeader {
  children: ReactNode
}

const Header = ({ children }: IHeader) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <LeftNavigation />
          <Search />
          <RightNavigation />
        </div>
      </header>
      {children}
    </>
  )
}

export default Header
