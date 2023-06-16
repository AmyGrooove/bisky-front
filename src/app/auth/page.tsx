import { cl } from "@/utils"

import styles from "./index.module.scss"
import AuthForm from "./AuthForm"

const Page = () => {
  return (
    <div className={cl(styles.authContainer, styles.contar)}>
      <AuthForm />
    </div>
  )
}

export default Page
