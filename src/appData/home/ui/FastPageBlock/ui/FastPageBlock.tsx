import Link from "next/link"

import { HeartIcon } from "@shared/icons"
import { Text } from "@shared/ui/atoms"
import { Button } from "@shared/ui/molecules"

import st from "./FastPageBlock.module.scss"

const FastPageBlock = () => (
  <div className={st.root}>
    <Text size="28" weight="700">
      Быстро найти новые аниме
    </Text>
    <Link href="/fastFind">
      <Button renderLeftIcon={(iconProps) => <HeartIcon {...iconProps} />}>
        Быстрый поиск
      </Button>
    </Link>
  </div>
)

export { FastPageBlock }
