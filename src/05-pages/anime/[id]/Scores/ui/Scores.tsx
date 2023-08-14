"use client"

import { Title } from "@/01-shared/ui/Title"
import { Badge } from "@/01-shared/ui/Badge"
import { Rating } from "@/01-shared/ui/Rating"

import styles from "./Scores.module.scss"

interface IScores {
  scores: number
}

const Scores = ({ scores = 0 }: IScores) => {
  const handleClickStar = (index: number) => {
    // console.log(index)
  }

  return (
    <div>
      <Title order={3}>Рейтинг</Title>
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

export { Scores }
