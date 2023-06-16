import { cl } from "@/utils"

import styles from "./index.module.scss"

interface IFooter {
  className?: string
}

const Footer = ({ className = "" }: IFooter) => {
  return (
    <footer className={cl(styles.footer, className)}>
      <span className={styles.footer__title}>Bisky</span>
    </footer>
  )
}

export default Footer
