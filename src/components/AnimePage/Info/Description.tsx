import { useEffect, useRef, useState } from 'react'

import styles from './index.module.scss'

interface IDescription {
  description: string;
}

const Description = ({ description }: IDescription) => {
  const [openDesc, setOpenDesc] = useState(false)

  const blockRef = useRef<HTMLHeadingElement>(null)
  const [descHeight, setDescHeight] = useState(0)

  useEffect(() => {
    if (blockRef.current) {
      setDescHeight(blockRef.current.offsetHeight)
    }
  }, [descHeight, blockRef])

  return (
    <div className={styles.description}>
      <h4 className={styles.description__label}>Описание</h4>
      <h5
        ref={blockRef}
        className={`${styles.description__text} ${
          descHeight >= 119 &&
          (openDesc
            ? styles.description__text_active
            : styles.description__text_unActive)
        }`}
      >
        {description}
      </h5>
      {descHeight >= 119 && (
        <button
          className={styles.description__button}
          onClick={() => setOpenDesc(!openDesc)}
        >
          {openDesc ? 'Скрыть' : 'Читать дальше'}
        </button>
      )}
    </div>
  )
}

export default Description
