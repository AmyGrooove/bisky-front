"use client"

import Rating from "@/components/Common/Rating"
import ScoreBadge from "@/components/Common/ScoreBadge"
import Title from "@/components/Common/Title"
import { IAnimeInfo } from "@/types"

import styles from "./index.module.scss"

interface IRatingBlock extends Partial<IAnimeInfo> {}

const RatingBlock = ({ scores = 0 }: IRatingBlock) => {
  const handleClickStar = (index: number) => {
    console.log(index)
  }

  return (
    <div>
      <Title order={2}>Рейтинг</Title>
      <div className={styles.rating}>
        <Rating
          defaultValue={scores}
          count={10}
          withLabels
          onSelectedClick={handleClickStar}
        />
        <div className={styles.rating__score}>
          <ScoreBadge score={scores} />
          {/* <span className={styles.rating__score__count}>228 оценок</span> */}
        </div>
      </div>
    </div>
  )
}

export default RatingBlock
