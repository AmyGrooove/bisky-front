import { IAnimesListDataProps } from "../types/IAnimesListDataProps"

const useAnimesListData = (props: IAnimesListDataProps) => {
  const { animeList } = props

  return { animeList }
}

export { useAnimesListData }
