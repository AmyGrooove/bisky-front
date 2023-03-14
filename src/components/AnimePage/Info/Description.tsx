import styles from './index.module.scss'

interface IDescription {
  description: string;
}

const Description = ({ description }: IDescription) => {
  return <div className={styles.description}></div>
}

export default Description
