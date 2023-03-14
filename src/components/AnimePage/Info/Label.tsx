import { RusEngLabels } from '@/supportingTool/types'

import styles from './index.module.scss'

interface ILabel {
  label: RusEngLabels;
  all_labels: string[];
}

const Label = ({ label, all_labels }: ILabel) => {
  return (
    <div className={styles.label}>
      <h1 className={styles.label__main}>{label.ru}</h1>
      <h2 className={styles.label__sub}>{label.en}</h2>
      <div className={styles.label__all}>
        <span className={styles.label__all__label}>Все названия</span>
        <div className={styles.label__all__block}>
          {all_labels.map((el) => (
            <h3 key={el} className={styles.label__all__block__text}>
              {el}
            </h3>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Label
