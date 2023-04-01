import Link from "next/link"

import styles from "./index.module.scss"

interface IBlockLabel {
  label: string
  href?: string
  h3?: boolean
  h4?: boolean
  slider?: boolean
  className?: string
}

const BlockLabel = ({
  label,
  href,
  h3,
  h4,
  slider,
  className,
}: IBlockLabel) => {
  const LabelsCompare = () => {
    switch (true) {
      case h3:
        return (
          <h3
            className={`${styles.blockLabel__label} ${
              href && styles.blockLabel__label_href
            } ${styles.blockLabel__label_h3}`}
          >
            {label}
          </h3>
        )
      case h4:
        return (
          <h4
            className={`${styles.blockLabel__label} ${
              href && styles.blockLabel__label_href
            } ${styles.blockLabel__label_h4}`}
          >
            {label}
          </h4>
        )
      default:
        return (
          <h2
            className={`${styles.blockLabel__label} ${
              href && styles.blockLabel__label_href
            }`}
          >
            {label}
          </h2>
        )
    }
  }

  return (
    <div
      className={`${styles.blockLabel} ${
        slider && styles.blockLabel_slider
      } ${className}`}
    >
      {href ? (
        <Link href={href}>
          <LabelsCompare />
        </Link>
      ) : (
        <LabelsCompare />
      )}
    </div>
  )
}

export default BlockLabel
