import { cl } from "@/utils"
import { SearchIcon, StarFullIcon } from "@/components/icons"

import styles from "./index.module.scss"
import NavigationItem from "./NavigationItem"

interface IBottomNavigation {
  className?: string
}

const BottomNavigation = ({ className }: IBottomNavigation) => {
  const items = [
    {
      label: "Главная",
      icon: <StarFullIcon />,
      href: "/",
      active: true,
    },
    {
      label: "Каталог",
      icon: <StarFullIcon />,
      href: "/",
      active: false,
    },
    {
      label: "Моё",
      icon: <StarFullIcon />,
      href: "/",
      active: false,
    },
    {
      label: "Аккаунт",
      icon: <StarFullIcon />,
      href: "/",
      active: false,
    },
    {
      label: "Поиск",
      icon: <SearchIcon />,
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
          icon={item.icon}
          active={item.active}
        />
      ))}
    </div>
  )
}

export default BottomNavigation
