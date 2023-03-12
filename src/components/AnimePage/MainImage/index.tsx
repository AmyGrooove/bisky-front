import AmyImage from '@/components/Common/AmyImage'

import styles from './index.module.scss'

interface IMainPage {
  data: string;
}

const MainImage = ({ data }: IMainPage) => {
  return (
    <section className={styles.mainImage}>
      <div className={styles.mainImage_wrapper}>
        <AmyImage
          src={data}
          width={250}
          height={360}
          poster
          className={styles.mainImage_img}
        />
        <button className={styles.mainImage_button}>Смотреть</button>
        <button className={styles.mainImage_button}>Добавить в закладки</button>
      </div>
    </section>
  )
}

export default MainImage
