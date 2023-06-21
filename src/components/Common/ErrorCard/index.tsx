import { ReactNode } from "react"

import { cl } from "@/utils"
import { BISKY_ERROR_1, BISKY_ERROR_2 } from "@/constants"

import AppImage from "../AppImage"
import StatusBagde from "../StatusBadge"

import styles from "./index.module.scss"

interface IErrorCard {
  type: "404" | "500"

  children?: ReactNode
  className?: string
}

const ErrorCard = ({ type, className, children }: IErrorCard) => {
  const errors = {
    "404": {
      label: "Страница не найдена",
      image: BISKY_ERROR_1,
      size: {
        width: 170,
        height: 220,
      },
    },
    "500": {
      label: "Проблемы на сервере",
      image: BISKY_ERROR_2,
      size: {
        width: 220,
        height: 170,
      },
    },
  }

  return (
    <div className={cl(styles.errorCard, className)}>
      <h4 className={styles.errorCard__title}>
        Ошибка <StatusBagde status="red">{type}</StatusBagde>
      </h4>
      <p className={styles.errorCard__label}>{errors[type].label}</p>
      <AppImage
        className={styles.errorCard__image}
        imageType="another"
        src={errors[type].image}
        width={errors[type].size.width}
        height={errors[type].size.height}
      />
      {children}
    </div>
  )
}

export default ErrorCard
