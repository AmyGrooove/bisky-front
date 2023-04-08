import { ReactNode, useState } from "react"

import useWindowSize from "@/supportingTool/functions/useWindowSize"

import styles from "./index.module.scss"

interface ILabelSelect {
  labels: string[]
  elements: ReactNode[]
  startPage?: number
}

const LabelSelect = ({ labels, elements, startPage = 0 }: ILabelSelect) => {
  const { windowSize } = useWindowSize()
  const [selectedPage, setSelectedPage] = useState(startPage)

  return (
    <>
      <div
        className={styles.labelSelect}
        style={{ maxWidth: windowSize + "px" }}
      >
        {labels.map((el, index) => (
          <button
            key={el}
            onClick={() => setSelectedPage(index)}
            className={`${styles.labelSelect__button} ${
              selectedPage === index && styles.labelSelect__button_active
            }`}
          >
            {el}
          </button>
        ))}
      </div>
      {elements[selectedPage]}
    </>
  )
}

export default LabelSelect
