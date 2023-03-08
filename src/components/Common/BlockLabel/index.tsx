import Link from 'next/link'

import styles from './index.module.scss'

interface IBlockLabel {
  label: string;
  href: string;
}

const BlockLabel = ({ label, href }: IBlockLabel) => {
  return (
    <Link href={href} className={styles.blockLabel}>
      <h1 className={styles.blockLabel__label}>{label}</h1>
    </Link>
  )
}

export default BlockLabel
