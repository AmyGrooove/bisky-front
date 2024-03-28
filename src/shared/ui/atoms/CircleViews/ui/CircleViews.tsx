import { getCircleGradient } from "../functions/getCircleGradient"
import { ICircleViewsProps } from "../types/ICircleViewsProps"

import st from "./CircleViews.module.scss"

const CircleViews = (props: ICircleViewsProps) => (
  <div className={st.root} style={{ background: getCircleGradient(props) }} />
)

export { CircleViews }
