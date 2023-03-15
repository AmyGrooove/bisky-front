import Link from 'next/link'

import { Genres, RusEngLabels, ShortStudio } from '@/supportingTool/types'
import {
  getNormalKind,
  getNormalRating,
  nextEpisode,
  dateFormat,
} from '@/supportingTool/functions'
import AmyImage from '@/components/Common/AmyImage'
import { ARROW_RIGHT } from '@/theme/sources'

import styles from './index.module.scss'

interface IAddInfo {
  kind: string;
  status: string;
  next_episode_at: string | null;
  episodes: {
    count: number | null;
    aired: number;
    duration: number;
  };
  genres: Genres[];
  rating: string;
  studios: ShortStudio[];
  releaseDates: {
    aired_on: string;
    released_on: string | null;
  };
  videos: string[];
}

const AddInfo = ({
  kind,
  status,
  next_episode_at,
  episodes,
  genres,
  rating,
  studios,
  releaseDates,
  videos,
}: IAddInfo) => {
  const episodeCountCheck = episodes.count ? episodes.count : '?'

  return (
    <div className={styles.addInfo}>
      <div className={styles.addInfo__info}>
        <span className={styles.addInfo__info__label}>Тип:</span>
        <Link href="#" className={styles.addInfo__info__link}>
          <h4 className={styles.addInfo__info__text}>{getNormalKind(kind)}</h4>
        </Link>
      </div>
      <div className={styles.addInfo__info}>
        <span className={styles.addInfo__info__label}>Статус:</span>
        <Link href="#" className={styles.addInfo__info__link}>
          <h4 className={`${styles.addInfo__info__status} ${status}`}>
            {status}
          </h4>
        </Link>
      </div>
      {next_episode_at && (
        <div
          className={`${styles.addInfo__info} ${styles.addInfo__info__nextEpisode}`}
          data-content={dateFormat(next_episode_at)}
        >
          <span className={styles.addInfo__info__label}>До новой серии:</span>
          <h5 className={styles.addInfo__info__text}>
            {nextEpisode(next_episode_at)}
          </h5>
        </div>
      )}
      <span className={styles.addInfo__br} />
      <div className={styles.addInfo__info}>
        <span className={styles.addInfo__info__label}>Количество серий:</span>
        <h5 className={styles.addInfo__info__text}>
          {status !== 'released'
            ? episodes.aired + '/' + episodeCountCheck
            : episodeCountCheck}
        </h5>
      </div>
      <div className={styles.addInfo__info}>
        <span className={styles.addInfo__info__label}>Длительность серии:</span>
        <h4 className={styles.addInfo__info__text}>
          {episodes.duration + ' мин'}
        </h4>
      </div>
      <span className={styles.addInfo__br} />
      <div
        className={`${styles.addInfo__info} ${styles.addInfo__info__genres}`}
      >
        <span className={styles.addInfo__info__label}>Жанры:</span>
        <div className={styles.addInfo__info__genres__block}>
          {genres.map((el) => (
            <Link
              key={el.genre_id}
              href="#"
              className={styles.addInfo__info__genres_link}
            >
              <h4 className={styles.addInfo__info__genres_link_text}>
                {el.name.ru}
              </h4>
            </Link>
          ))}
        </div>
      </div>
      <span className={styles.addInfo__br} />
      <div className={styles.addInfo__info}>
        <span className={styles.addInfo__info__label}>Ограничения:</span>
        <Link href="#" className={styles.addInfo__info__link}>
          <h4 className={styles.addInfo__info__text}>
            {getNormalRating(rating)}
          </h4>
        </Link>
      </div>
      <div className={styles.addInfo__info}>
        <span className={styles.addInfo__info__label}>Студия:</span>
        {studios.map((el) => (
          <Link
            key={el.studio_id}
            href="#"
            className={styles.addInfo__info__link}
          >
            <h5 className={styles.addInfo__info__text}>{el.name}</h5>
          </Link>
        ))}
      </div>
      <div
        className={`${styles.addInfo__info} ${styles.addInfo__info__nextEpisode}`}
        data-content={
          releaseDates.released_on ? dateFormat(releaseDates.released_on) : '?'
        }
      >
        <span className={styles.addInfo__info__label}>Дата премьера:</span>
        <h5 className={styles.addInfo__info__text}>
          {dateFormat(releaseDates.aired_on)}
        </h5>
      </div>
      <div className={styles.addInfo__info}>
        <span className={styles.addInfo__info__label}>Трейлер:</span>
        {videos.map((el, index) => (
          <Link
            key={el}
            href={el}
            target="_blank"
            className={styles.addInfo__info__video}
          >
            Видео {index + 1}
            <AmyImage
              src={ARROW_RIGHT} width={20}
              height={20} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AddInfo
