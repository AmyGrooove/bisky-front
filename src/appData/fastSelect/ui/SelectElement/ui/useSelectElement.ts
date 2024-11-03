import { ISelectElementProps } from "../types/ISelectElementProps"

const useSelectElement = (props: ISelectElementProps) => {
  const { side, animeData, onClick } = props

  return { side, animeData, onClick }
}

export { useSelectElement }
