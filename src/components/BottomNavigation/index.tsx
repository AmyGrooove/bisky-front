import { cl } from "@/utils"
import { SEARCH, STAR_FULL } from "@/constants"

import styles from "./index.module.scss"
import NavigationItem from "./NavigationItem"

interface IBottomNavigation {
  className?: string
}

const BottomNavigation = ({ className = "" }: IBottomNavigation) => {
  const items = [
    {
      label: "Главная",
      icon: STAR_FULL,
      href: "/",
      active: true,
    },
    {
      label: "Каталог",
      icon: STAR_FULL,
      href: "/",
      active: false,
    },
    {
      label: "Моё",
      icon: STAR_FULL,
      href: "/",
      active: false,
    },
    {
      label: "Аккаунт",
      icon: STAR_FULL,
      href: "/",
      active: false,
    },
    {
      label: "Поиск",
      icon: SEARCH,
      href: "/",
      active: false,
    },
  ]

  return (
    <div className={cl(styles.bottomNavigation, className)}>
      {items.map((item, index) => (
        <NavigationItem
          key={index}
          label={item.label}
          href={item.href}
          iconName={item.icon}
          active={item.active}
        />
      ))}
    </div>
  )
}

export default BottomNavigation