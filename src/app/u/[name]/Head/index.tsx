import AppImage from "@/components/Common/AppImage"

import styles from "./index.module.scss"

interface IHead {
  userId: number
}

const Head = async ({ userId = 0 }: IHead) => {
  return (
    <>
      <div className={styles.head}></div>
      <AppImage
        containerClass={styles.head__backgroundContainer}
        className={styles.head__background}
        src={"d2c9680a9a7a4a0a092c5b29a2445bbb7b4bc3f2"}
        width={100}
        height={100}
        imageType="screenshot"
      />
    </>
  )
}

export default Head
