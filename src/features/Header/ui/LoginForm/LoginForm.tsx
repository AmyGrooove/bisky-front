import { Modal } from "@shared/ui/atoms/Modal"
import { Text } from "@shared/ui/atoms/Text"

import st from "./LoginForm.module.scss"

const LoginForm = () => {
  return (
    <Modal className={st.root}>
      <Text>Авторизация</Text>
    </Modal>
  )
}

export { LoginForm }
