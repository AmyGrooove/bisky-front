import { cl } from "@/utils"

import styles from "./index.module.scss"

interface ITitle {
  children: string

  order?: number
  className?: string
}

const Title = ({ children, order = 1, className }: ITitle) => {
  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null
  }

  const Element = `h${order}` as keyof JSX.IntrinsicElements

  return (
    <Element className={cl(styles.title, styles[`title_h${order}`], className)}>
      {children}
    </Element>
  )
}

export default Title
