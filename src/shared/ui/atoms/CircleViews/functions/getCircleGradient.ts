import { ICircleViewsProps } from "../types/ICircleViewsProps"

const getCircleGradient = (props: ICircleViewsProps) => {
  const infoArray: number[] = Object.values(props)

  const sumInfo = infoArray.reduce((result, stat) => result + stat, 0)
  const stateArray = infoArray.map((state) => (state * 360) / sumInfo)

  return `conic-gradient(var(--blue) ${stateArray[3]}deg, var(--green) ${stateArray[3]}deg ${stateArray[3] + stateArray[1]}deg, var(--bisky-200) ${stateArray[3] + stateArray[1]}deg ${stateArray[3] + stateArray[1] + stateArray[0]}deg, var(--dark-100) ${stateArray[3] + stateArray[1] + stateArray[0]}deg)`
}

export { getCircleGradient }
