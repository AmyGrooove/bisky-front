import { addUpdateAnimeFromList } from "@entities/AnimeEstimate/api"

import { IAddListButtonProps } from "../../../../types/IAddListButtonProps"

const useListButtonSwitch = (props: IAddListButtonProps) => {
  const { userAnimeStatus, updateUserData, _id } = props

  const addAnimeInList = async () => {
    await addUpdateAnimeFromList({
      animeId: _id ?? "",
      animeStatus: "added",
    })

    await updateUserData()
  }

  return { userAnimeStatus, addAnimeInList }
}

export { useListButtonSwitch }
