import Link from 'next/link'

import styles from './index.module.scss'

interface IBlockLabel {
  label: string;
  href: string;
  leftPadding?: boolean;
}

const BlockLabel = ({ label, href, leftPadding }: IBlockLabel) => {
  return (
    <Link
      href={href}
      className={`${styles.blockLabel} ${
        leftPadding && styles.blockLabel_padding
      }`}
    >
      <h2 className={styles.blockLabel__label}>{label}</h2>
    </Link>
  )
}

export default BlockLabel
