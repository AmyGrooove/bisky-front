import Link from 'next/link'

import { BISKY_WIKI_URL } from '@/supportingTool/constatns'

import styles from './index.module.scss'

function Footer() {
  return (
    <>
      <span />
      <footer className={styles.footer}>
        <Link href={BISKY_WIKI_URL} className={styles.footer__label}>
          © Bisky
        </Link>
      </footer>
    </>
  )
}

export default Footer
