import { cl } from "@/utils"
import { BISKY_ERROR_1, BISKY_ERROR_2 } from "@/constants"

import AppImage from "../AppImage"
import StatusBagde from "../StatusBadge"

import styles from "./index.module.scss"

interface IErrorCard {
  type: 404 | 500

  className?: string
}

const ErrorCard = ({ type, className }: IErrorCard) => {
  const errors = {
    404: {
      label: "Страница не найдена",
      image: BISKY_ERROR_1,
    },
    500: {
      label: "Проблемы на сервере",
      image: BISKY_ERROR_2,
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
        width={170}
        height={217}
      />
    </div>
  )
}

export default ErrorCard
