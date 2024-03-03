import { memo } from "react"

import { ICircleViewsProps } from "../Types/ICircleViewsProps"

import st from "./CircleViews.module.scss"

const CircleViews = memo(function CircleViews(props: ICircleViewsProps) {
  const stateArray: number[] = Object.values(props)
  const sumStat = stateArray.reduce((result, stat) => result + stat, 0)
  stateArray.forEach(
    (stat, index, array) => (array[index] = (stat * 360) / sumStat),
  )

  const conicGradient = {
    background: `conic-gradient(var(--blue) ${stateArray[3]}deg, var(--green) ${stateArray[3]}deg ${stateArray[3] + stateArray[1]}deg, var(--bisky-200) ${stateArray[3] + stateArray[1]}deg ${stateArray[3] + stateArray[1] + stateArray[0]}deg, var(--dark-100) ${stateArray[3] + stateArray[1] + stateArray[0]}deg)`,
  }

  return <div className={st.circle_views} style={conicGradient} />
})

export { CircleViews }
