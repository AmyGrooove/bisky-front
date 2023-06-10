import { ReactNode } from "react"

import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
import Search from "./Search"
import styles from "./index.module.scss"

interface IHeader {
  children: ReactNode
}

const Header = ({ children }: IHeader) => {
  return (
    <>
      <div className={styles.header}>
        <LeftSide />
        <Search />
        <RightSide />
      </div>
      {children}
    </>
  )
}

export default Header
