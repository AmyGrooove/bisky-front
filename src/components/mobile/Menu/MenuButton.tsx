import Link from "next/link"

import AmyImage from "@/components/Common/AmyImage"
import { BISKY_LOGO } from "@/theme/sources"

import styles from "./index.module.scss"

interface IMenuButton {
  href: string
  label: string
  active: boolean
}

const MenuButton = ({ href, label, active }: IMenuButton) => {
  return (
    <Link
      href={href}
      className={`${styles.menuButton} ${active && styles.menuButton_active}`}
    >
      <AmyImage
        src={BISKY_LOGO}
        width={50}
        height={50}
        className={styles.menuButton__img}
      />
      <span className={styles.menuButton__label}>{label}</span>
    </Link>
  )
}

export default MenuButton
