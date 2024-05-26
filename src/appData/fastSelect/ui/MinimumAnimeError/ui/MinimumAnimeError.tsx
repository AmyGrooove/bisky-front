import Image from "next/image"
import Link from "next/link"

import { Text } from "@shared/ui/atoms"
import { Button } from "@shared/ui/molecules"

import st from "./MinimumAnimeError.module.scss"

const MinimumAnimeError = () => {
  return (
    <div className={st.root}>
      <div className={st.errorBlock}>
        <div className={st.title}>
          <Text weight="700" size="32">
            Ошибка
          </Text>
          <Text weight="700" size="32" as="span" className={st.errorNumber}>
            403
          </Text>
        </div>
        <div className={st.authBlock}>
          <Text size="20" className={st.justBorder}>
            Необходимо 2 или более аниме
          </Text>
          <Link href="/fastFind">
            <Button>Быстрый поиск</Button>
          </Link>
        </div>
        <Image width={220} height={170} src="/images/biskyFinger.png" alt="" />
      </div>
    </div>
  )
}

export { MinimumAnimeError }
