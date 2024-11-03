import { ISelectWinnerProps } from "../types/ISelectWinnerProps"

const useSelectWinner = (props: ISelectWinnerProps) => {
  const { animeData } = props

  return { animeData }
}

export { useSelectWinner }
