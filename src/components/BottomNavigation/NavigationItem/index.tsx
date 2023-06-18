import Link from "next/link"

import { cl } from "@/utils"
import AppImage from "@/components/Common/AppImage"

import styles from "./index.module.scss"

interface INavigationItem {
  iconName: string
  label: string
  href: string

  active?: boolean
  className?: string
}

const NavigationItem = ({
  iconName,
  label,
  href,
  active = false,
  className = "",
}: INavigationItem) => {
  const activeClass = active ? styles.navigationItem_active : ""

  return (
    <Link
      href={href}
      className={cl(styles.navigationItem, activeClass, className)}
    >
      <AppImage
        className={styles.navigationItem__icon}
        imageType="vector"
        src={iconName}
        width={20}
        height={20}
      />
      <span className={styles.navigationItem__label}>{label}</span>
    </Link>
  )
}

export default NavigationItem
