"use client"

import Image from "next/image"

import st from "@appData/home/styles/homeError.module copy.scss"
import { Text } from "@shared/ui/atoms/Text"

const HomeError = () => {
  return (
    <div className={st.root}>
      <div className={st.errorBlock}>
        <div className={st.title}>
          <Text weight="700" size="32">
            Ошибка
          </Text>
          <Text weight="700" size="32" as="span" className={st.errorNumber}>
            500
          </Text>
        </div>
        <Text size="20">Проблемы на сервере</Text>
        <Image width={220} height={170} src="/images/biskyError2.png" alt="" />
      </div>
    </div>
  )
}

export default HomeError
