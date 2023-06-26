"use client"

import Rating from "@/components/common/Rating"
import Title from "@/components/common/Title"
import { AnimeInfoType } from "@/types"
import Badge from "@/components/common/Badge"

import styles from "./index.module.scss"

interface IRatingBlock extends Partial<AnimeInfoType> {}

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
          <Badge calculate>{scores.toString()}</Badge>
          {/* <span className={styles.rating__score__count}>228 оценок</span> */}
        </div>
      </div>
    </div>
  )
}

export default RatingBlock
