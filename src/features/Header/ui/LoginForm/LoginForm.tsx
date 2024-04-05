import { Modal } from "@shared/ui/atoms/Modal"

import st from "./LoginForm.module.scss"
import { Text } from "@shared/ui/atoms/Text"

const LoginForm = () => {
  return (
    <Modal className={st.root}>
      <Text>Авторизация</Text>
    </Modal>
  )
}

export { LoginForm }
