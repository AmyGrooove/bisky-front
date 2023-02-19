import Link from 'next/link'

import styles from './index.module.scss'

function Footer() {
  return (
    <>
      <span />
      <footer className={styles.footer}>
        <Link
          href="https://hunterxhunter.fandom.com/ru/wiki/Бискет_Крюгер"
          className={styles.footer__label}
        >
          © Bisky
        </Link>
      </footer>
    </>
  )
}

export default Footer
