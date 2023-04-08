import { useRouter } from "next/router"

import styles from "./index.module.scss"
import MenuButton from "./MenuButton"

const Menu = () => {
  const { pathname } = useRouter()

  return (
    <div className={styles.menu}>
      <MenuButton href="/" label="Главная" active={pathname === "/"} />
      <MenuButton href="#" label="???" active={false} />
      <MenuButton href="#" label="???" active={false} />
      <MenuButton
        href="/profile"
        label="Профиль"
        active={pathname.includes("/profile")}
      />
    </div>
  )
}

export default Menu
