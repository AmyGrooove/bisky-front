import { IResultRowProps } from "../../types/IResultRowProps"

const useResultRow = (props: IResultRowProps) => {
  const { animeData } = props

  return { animeData }
}

export { useResultRow }
