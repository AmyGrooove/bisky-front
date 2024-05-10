import Image from "next/image"
import { useContext } from "react"

import { Text } from "@shared/ui/atoms"
import { AuthBlock } from "@widgets/AuthBlock"
import { ModalContext } from "@widgets/ModalProvider"

import st from "./ErrorPage.module.scss"

const ErrorPage = () => {
  const { setModal } = useContext(ModalContext)

  return (
    <div className={st.root}>
      <div className={st.errorBlock}>
        <div className={st.title}>
          <Text weight="700" size="32">
            Ошибка
          </Text>
          <Text weight="700" size="32" as="span" className={st.errorNumber}>
            401
          </Text>
        </div>
        <div className={st.authBlock}>
          <Text size="20" className={st.justBorder}>
            Требуется
          </Text>
          <Text
            size="20"
            onClick={() => setModal(<AuthBlock />)}
            className={st.authButton}
          >
            авторизация
          </Text>
        </div>
        <Image width={220} height={170} src="/images/biskyError3.png" alt="" />
      </div>
    </div>
  )
}

export { ErrorPage }
