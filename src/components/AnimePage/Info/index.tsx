import Link from 'next/link'

import { AnimeInfo, PosterAnime } from '@/supportingTool/types'
import { getNormalKind, nextEpisode } from '@/supportingTool/functions'

import styles from './index.module.scss'

interface IInfo {
  data: AnimeInfo;
}

const Info = ({ data }: IInfo) => {
  const statusBack = () => {
    switch (data.status) {
    case 'released':
      return styles.info__addInfo_text_status_released
    case 'anons':
      return styles.info__addInfo_text_status_anons
    case 'ongoing':
      return styles.info__addInfo_text_status_ongoing
    default:
      return ''
    }
  }

  const episodeEnd = (count: number) => {
    switch (count % 10) {
    case 1:
      return ' эпизод'
    case 2:
    case 3:
    case 4:
      return ' эпизода'
    default:
      return ' эпизодов'
    }
  }

  return (
    <section className={styles.info}>
      <div className={styles.info__label}>
        <h1 className={styles.info__label_ru}>{data.label.ru}</h1>
        <h2 className={styles.info__label_en}>{data.label.en}</h2>
        <div className={styles.info__label_addit}>
          <span className={styles.info__label_addit_text}>Еще</span>
          <div className={styles.info__label_addit_allLabels}>
            <span className={styles.info__label_addit_allLabels_pos}>
              {data.all_labels.map((el) => (
                <h3
                  key={el}
                  className={styles.info__label_addit_allLabels_pos_text}
                >
                  {el}
                </h3>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.info__addInfo}>
        <div className={styles.info__addInfo_text}>
          <h3 className={styles.info__addInfo_text_label}>Тип:</h3>
          <Link href="#" className={styles.info__addInfo_text_link}>
            {getNormalKind(data.kind)}
          </Link>
        </div>
        <div className={styles.info__addInfo_text}>
          <h3 className={styles.info__addInfo_text_label}>Статус:</h3>
          <Link
            href="#"
            className={`${styles.info__addInfo_text_link} ${statusBack()}`}
          >
            {data.status}
          </Link>
        </div>
        {data.next_episode_at !== null && (
          <div
            className={`${styles.info__addInfo_text} ${styles.info__addInfo_text_date}`}
            data-text={new Date(data.next_episode_at || '')
              .toISOString()
              .slice(0, 10)
              .split('-')
              .reverse()
              .join('.')}
          >
            <h3 className={styles.info__addInfo_text_label}>
              Следующая серия выйдет через:
            </h3>
            <h3>{nextEpisode(data.next_episode_at || '0')}</h3>
          </div>
        )}
        <div className={styles.info__addInfo__br} />
        <div className={styles.info__addInfo_text}>
          <h3 className={styles.info__addInfo_text_label}>Количество серий:</h3>
          <h3>
            {data.status === 'ongoing'
              ? data.episodes_aired +
                '/' +
                (data.episodes === 0 ? '?' : data.episodes)
              : data.episodes}
            {episodeEnd(data.episodes_aired)}
          </h3>
        </div>
        <div className={styles.info__addInfo_text}>
          <h3 className={styles.info__addInfo_text_label}>
            Длительность серии:
          </h3>
          <h3>{data.duration} мин</h3>
        </div>
      </div>
    </section>
  )
}

export default Info
