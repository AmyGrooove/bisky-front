import { addUpdateAnimeFromList } from "@entities/AnimeEstimate/api"

import { IAddListButtonProps } from "../../../../types/IAddListButtonProps"

const useListButtonSwitch = (props: IAddListButtonProps) => {
  const { animeStatus, updateUserData, _id } = props

  const addAnimeInList = async () => {
    await addUpdateAnimeFromList({
      animeId: _id ?? "",
      animeStatus: "added",
    })

    await updateUserData()
  }

  return { animeStatus, addAnimeInList }
}

export { useListButtonSwitch }
