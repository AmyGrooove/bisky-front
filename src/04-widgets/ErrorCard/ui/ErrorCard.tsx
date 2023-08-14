import { BISKY_ERROR_1, BISKY_ERROR_2 } from "@/01-shared/data"
import { cl } from "@/01-shared/utils"
import { Badge } from "@/01-shared/ui/Badge"
import { AppImage } from "@/01-shared/ui/AppImage"

import styles from "./ErrorCard.module.scss"

interface IErrorCard {
  type: "404" | "500"

  className?: string
}

const ErrorCard = ({ type, className }: IErrorCard) => {
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
        Ошибка
        <Badge color="red" className={styles.errorCard__title__badge}>
          {type}
        </Badge>
      </h4>

      <p className={styles.errorCard__label}>{errors[type].label}</p>

      <AppImage
        className={styles.errorCard__image}
        imageType="another"
        src={errors[type].image}
        width={errors[type].size.width}
        height={errors[type].size.height}
      />
    </div>
  )
}

export { ErrorCard }
