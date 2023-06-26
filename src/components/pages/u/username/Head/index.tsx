import AppImage from "@/components/common/AppImage"
import IconButton from "@/components/common/IconButton"
import Title from "@/components/common/Title"
import { ShikimoriIcon, GoogleIcon, VkIcon } from "@/components/icons"

import styles from "./index.module.scss"

interface IHead {
  username: string
}

const Head = async ({ username }: IHead) => {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.head__userInfo}>
          <div className={styles.head__userInfo__avatar}>
            <AppImage
              imageType="another"
              src={
                "https://shikimori.me/system/users/x160/424023.png?1601532742"
              }
              width={110}
              height={110}
              className={styles.head__userInfo__avatar__image}
            />
            <span>Избранный</span>
          </div>
          <div className={styles.head__userInfo__labels}>
            <div className={styles.head__userInfo__labels_title}>
              <Title order={2}>Anton</Title>
              <span>✨</span>
            </div>
            <span className={styles.head__userInfo__labels_subtitle}>
              Был в сети - 2 дня назад
            </span>
          </div>
        </div>
        <div className={styles.head__links}>
          <IconButton icon={<ShikimoriIcon />} />
          <IconButton icon={<GoogleIcon />} />
          <IconButton icon={<VkIcon />} />
        </div>
      </div>
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
