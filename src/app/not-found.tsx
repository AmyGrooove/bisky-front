import Image from "next/image"

import st from "@appData/home/styles/homeNotFound.module.scss"
import { Text } from "@shared/ui/atoms/Text"

const HomeNotFound = () => (
  <div className={st.root}>
    <div className={st.errorBlock}>
      <div className={st.title}>
        <Text weight="700" size="32">
          Ошибка
        </Text>
        <Text weight="700" size="32" as="span" className={st.errorNumber}>
          404
        </Text>
      </div>
      <Text size="20">Страница не найдена</Text>
      <Image width={170} height={220} src="/images/biskyError1.png" alt="" />
    </div>
  </div>
)

export default HomeNotFound
