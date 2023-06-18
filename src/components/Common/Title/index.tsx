import { ARROW } from "@/constants"
import { cl } from "@/utils"

import IconButton from "../IconButton"

import styles from "./index.module.scss"

interface ITitle {
  children: string

  order?: number
  withRight?: boolean
  onRightClick?: () => void
  onLeftClick?: () => void
  className?: string
}

const Title = ({
  order = 1,
  children,
  withRight = false,
  onRightClick,
  onLeftClick,
  className,
}: ITitle) => {
  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null
  }

  const Element = `h${order}` as keyof JSX.IntrinsicElements

  return (
    <div className={styles.title}>
      <Element
        className={cl(
          styles.title__text,
          styles[`title__text_h${order}`],
          className,
        )}
      >
        {children}
      </Element>
      {withRight && (
        <div className={styles.title__right}>
          <IconButton
            onClick={onLeftClick}
            iconName={ARROW}
            variant="filled"
            size={20}
            disabled
            style={{ transform: " scale(-1, 1)" }}
          />
          <IconButton
            onClick={onRightClick}
            iconName={ARROW}
            variant="filled"
            size={20}
          />
        </div>
      )}
    </div>
  )
}

export default Title
