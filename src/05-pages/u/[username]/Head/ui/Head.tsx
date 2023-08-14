import { AppImage } from "@/01-shared/ui/AppImage"
import { Title } from "@/01-shared/ui/Title"
import { IconButton } from "@/01-shared/ui/IconButton"
import { GoogleIcon, ShikimoriIcon, VkIcon } from "@/01-shared/ui/icons"
import { Badge } from "@/01-shared/ui/Badge"

import styles from "./Head.module.scss"

interface IHead {
  username: string
  image: string
}

const Head = async ({ username, image }: IHead) => {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.head__userInfo}>
          <div className={styles.head__userInfo__avatar}>
            <AppImage
              imageType="another"
              src={image}
              width={110}
              height={110}
              className={styles.head__userInfo__avatar__image}
            />
            <Badge color="bisky">Избранный</Badge>
          </div>
          <div className={styles.head__userInfo__labels}>
            <div className={styles.head__userInfo__labels_title}>
              <Title order={2}>{username}</Title>
              {/* <span>✨</span> */}
            </div>
            {/* <span className={styles.head__userInfo__labels_subtitle}>
              Был в сети - 2 дня назад
            </span> */}
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

export { Head }
