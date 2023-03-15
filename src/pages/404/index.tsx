import { BISKY_ERROR } from '@/theme/sources'
import AmyImage from '@/components/Common/AmyImage'

import styles from './index.module.scss'

const Error404 = () => {
  return (
    <div className={styles.error404}>
      <div className={styles.error404__block}>
        <h2 className={styles.error404__block_mainText}>
          Ошибка
          <span className={styles.error404__block_mainText_number}>404</span>
        </h2>
        <h3>Такой страницы не существует</h3>
        <AmyImage
          src={BISKY_ERROR} width={200}
          height={250} />
      </div>
    </div>
  )
}

export default Error404
