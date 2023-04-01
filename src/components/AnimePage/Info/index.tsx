import styles from "./index.module.scss"
import Label from "./Label"
import Description from "./Description"
import AddInfo from "./AddInfo"

const Info = () => {
  return (
    <section className={styles.info}>
      <Label />
      <AddInfo />
      <Description />
    </section>
  )
}

export default Info
