import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
import Search from "./Search"
import styles from "./index.module.scss"

interface IHeader {}

const Header = ({}: IHeader) => {
  return (
    <>
      <header className={styles.header}>
        <LeftSide />
        <Search />
        <RightSide />
      </header>
    </>
  )
}

export default Header
