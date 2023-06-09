import Link from "next/link"

import { BISKY_LOGO, LINKS } from "@/constants"
import AmyImage from "@/components/common/AmyImage"

import styles from "./index.module.scss"

function LeftNavigation() {
  return (
    <div className={styles.left}>
      <Link href="/" className={styles.left__logo}>
        <AmyImage
          src={BISKY_LOGO}
          width={48}
          height={48}
          className={styles.left__logo_icon}
        />
        <h1 className={styles.left__logo_label}>Bisky</h1>
      </Link>
      <div className={styles.left__navigation}>
        {LINKS.map((el) => (
          <Link
            key={el.name}
            href={el.href}
            className={styles.left__navigation_link}
          >
            {el.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LeftNavigation
