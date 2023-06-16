import { cl } from "@/utils"

import styles from "./index.module.scss"

interface IBottomNavigation {
  className?: string
}

const BottomNavigation = ({ className = "" }: IBottomNavigation) => {
  return (
    <div className={cl(styles.bottomNavigation, className)}>
      <span className={styles.bottomNavigation__title}>Bisky</span>
    </div>
  )
}

export default BottomNavigation
