import Link from 'next/link'

import {
  getNormalKind,
  getNormalRating,
  nextEpisode,
  dateFormat,
} from '@/supportingTool/functions'
import AmyImage from '@/components/Common/AmyImage'
import { ARROW_RIGHT } from '@/theme/sources'
import { IAnimeInfo, IGenres, IStudios } from '@/supportingTool/types'

import styles from './index.module.scss'

interface IAddInfo {
  episodes: {
    count: number | null;
    aired: number | null;
    duration: number;
    next_episode_at: Date | null;
  };
  kind: 'tv' | 'movie' | 'ova' | 'ona' | 'special' | 'music';
  genres: IGenres[];
  rating: 'none' | 'g' | 'pg' | 'pg_13' | 'r' | 'r_plus' | 'rx';
  studios: IStudios[];
  dates: {
    aired_on: Date | null;
    released_on: Date | null;
  };
  videos: string[];
  status: 'anons' | 'ongoing' | 'released';
}

const AddInfo = ({
  episodes,
  kind,
  genres,
  rating,
  studios,
  dates,
  videos,
  status,
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
      {episodes.next_episode_at && (
        <div
          className={`${styles.addInfo__info} ${styles.addInfo__info__nextEpisode}`}
          data-content={dateFormat(episodes.next_episode_at)}
        >
          <span className={styles.addInfo__info__label}>До новой серии:</span>
          <h5 className={styles.addInfo__info__text}>
            {nextEpisode(episodes.next_episode_at)}
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
        data-content={dates.released_on ? dateFormat(dates.released_on) : '?'}
      >
        <span className={styles.addInfo__info__label}>Дата премьера:</span>
        <h5 className={styles.addInfo__info__text}>
          {dateFormat(dates.aired_on)}
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
