import { cl } from "@/utils"
import AppImage from "@/components/Common/AppImage"

import styles from "./index.module.scss"

interface INavigationItem {
  iconName: string
  label: string

  active?: boolean
  className?: string
}

const NavigationItem = ({
  iconName,
  label,
  active = false,
  className = "",
}: INavigationItem) => {
  const activeClass = active ? styles.navigationItem_active : ""

  return (
    <div className={cl(styles.navigationItem, activeClass, className)}>
      <AppImage
        className={styles.navigationItem__icon}
        imageType="vector"
        src={iconName}
        width={20}
        height={20}
      />
      <span className={styles.navigationItem__label}>{label}</span>
    </div>
  )
}

export default NavigationItem
