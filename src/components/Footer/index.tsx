import Link from "next/link"

import { LogoIcon, ShikimoriIcon, VkIcon } from "@/Icons"

import IconButton from "../Common/IconButton"
import Title from "../Common/Title"

import styles from "./index.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__content__left}>
          <div className={styles.footer__content__left__title}>
            <LogoIcon />
            <Title order={3}>Bisky.one</Title>
          </div>
          <ul className={styles.footer__content__left__politics}>
            <li>
              <Link href="/agreement" target="_blank">
                пользовательское соглашение
              </Link>
            </li>
            <li>
              <Link href="/privacy" target="_blank">
                политика конфиденциальности
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                авторы проекта
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__content__right}>
          <IconButton icon={<VkIcon />} />
          <IconButton icon={<ShikimoriIcon />} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
