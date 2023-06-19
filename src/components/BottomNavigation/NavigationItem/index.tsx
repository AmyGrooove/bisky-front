import Link from "next/link"
import { ReactNode } from "react"

import { cl } from "@/utils"
import AppImage from "@/components/Common/AppImage"

import styles from "./index.module.scss"

interface INavigationItem {
  icon: ReactNode
  label: string
  href: string

  active?: boolean
  className?: string
}

const NavigationItem = ({
  icon,
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
      {icon}
      <span className={styles.navigationItem__label}>{label}</span>
    </Link>
  )
}

export default NavigationItem
