import Link from "next/link"

import styles from "./index.module.scss"

interface IBlockLabel {
  label: string
  href: string
  leftPadding?: boolean
  downgrade?: boolean
}

const BlockLabel = ({ label, href, leftPadding, downgrade }: IBlockLabel) => {
  return (
    <Link
      href={href}
      className={`${styles.blockLabel} ${
        leftPadding && styles.blockLabel_padding
      }`}
    >
      {downgrade ? (
        <h3 className={styles.blockLabel__downgrade}>{label}</h3>
      ) : (
        <h2
          className={`${styles.blockLabel__label} ${styles.blockLabel__label_downgrade}`}
        >
          {label}
        </h2>
      )}
    </Link>
  )
}

export default BlockLabel
