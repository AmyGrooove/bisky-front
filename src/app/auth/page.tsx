import styles from "./index.module.scss"
import AuthForm from "./AuthForm"

const Page = () => {
  return (
    <div className={styles.authContainer}>
      <AuthForm />
    </div>
  )
}

export default Page
