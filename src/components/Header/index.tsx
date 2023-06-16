import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
import Search from "./Search"
import styles from "./index.module.scss"

interface IHeader {}

const Header = ({}: IHeader) => {
  return (
    <>
      <div className={styles.header}>
        <LeftSide />
        <Search />
        <RightSide />
      </div>
    </>
  )
}

export default Header
