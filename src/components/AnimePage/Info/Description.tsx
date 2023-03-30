import { useContext, useEffect, useRef, useState } from "react"

import styles from "./index.module.scss"

import { AnimeInfoContext } from "."

const Description = () => {
  const { description } = useContext(AnimeInfoContext)

  const [openDesc, setOpenDesc] = useState(false)
  const [checkHeight, setCheckHeight] = useState(false)

  const descriptionRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    setCheckHeight(
      descriptionRef.current
        ? descriptionRef.current?.offsetHeight > 200
        : false,
    )
  }, [descriptionRef])

  const openDescHandler = () => {
    const asyncOpenDesc = new Promise((resolve) => {
      setOpenDesc(!openDesc)

      resolve(true)
    })

    asyncOpenDesc.then(() => {
      window.scrollBy({
        top: descriptionRef.current
          ? descriptionRef.current?.offsetHeight
          : 150,
        behavior: "smooth",
      })
    })
  }

  return (
    <>
      {description && (
        <div className={styles.description}>
          <h4 className={styles.description__label}>Описание</h4>
          <h5
            ref={descriptionRef}
            className={`${styles.description__text} ${
              checkHeight && !openDesc && styles.description__text_hide
            }`}
          >
            {description.split("<br>").map((el) => (
              <p key={el}>{el}</p>
            ))}
          </h5>
          {checkHeight && (
            <button onClick={openDescHandler}>
              {openDesc ? "Скрыть" : "Читать дальше"}
            </button>
          )}
        </div>
      )}
    </>
  )
}

export default Description
