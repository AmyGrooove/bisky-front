import { cl } from "@/utils"
import styles from "./index.module.scss"

interface IScoreBadge {
  className?: string
  score: number
}

const ScoreBadge = ({ className, score }: IScoreBadge) => {
  let content = <></>

  if (score >= 0 && score <= 4.9) {
    content = (
      <span className={cl(styles.status, styles.status__red)}>
        {score.toFixed(1)}
      </span>
    )
  } else if (score >= 5 && score <= 6.9) {
    content = (
      <span className={cl(styles.status, styles.status__gray)}>
        {score.toFixed(1)}
      </span>
    )
  } else {
    content = (
      <span className={cl(styles.status, styles.status__lime)}>
        {score.toFixed(1)}
      </span>
    )
  }

  return <div className={cl(className)}>{content}</div>
}

export default ScoreBadge
