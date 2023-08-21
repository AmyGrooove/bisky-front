"use client"

import { Tabs } from "@/01-shared/ui/Tabs"
import { AspectRatio } from "@/01-shared/ui/AspectRatio"

import styles from "./PlayersTabs.module.scss"

interface IPlayersTabs {
  kodikLink: string | undefined
  labels: string[]
}

const PlayersTabs = ({ kodikLink, labels }: IPlayersTabs) => {
  return (
    <Tabs defaultValue="kodik">
      <Tabs.List>
        <Tabs.Tab value="bisky">Bisky</Tabs.Tab>
        <Tabs.Tab value="kodik">Kodik</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="bisky">В работе</Tabs.Panel>
      <Tabs.Panel value="kodik">
        {kodikLink !== undefined ? (
          <AspectRatio ratio={16 / 9}>
            <iframe
              className={styles.kodikPlayer}
              src={kodikLink}
              width="1280"
              height="600"
              allowFullScreen
              allow="autoplay *; fullscreen *"
            />
          </AspectRatio>
        ) : (
          <span>Нету в Kodik&apos;e</span>
        )}
      </Tabs.Panel>
    </Tabs>
  )
}

export { PlayersTabs }
