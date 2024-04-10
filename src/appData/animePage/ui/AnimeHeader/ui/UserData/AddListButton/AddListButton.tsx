import { useSession } from "next-auth/react"
import { useRef } from "react"

import { Dropdown, IDropdownRef } from "@shared/ui/atoms/Dropdown"
import { WatchStatus } from "@shared/ui/atoms/WatchStatus"
import { Text } from "@shared/ui/atoms/Text"
import {
  addUpdateAnimeFromList,
  EListStatus,
  removeAnimeFromList,
} from "@entities/AnimeEstimate"

import { IAddListButtonProps } from "../../../types/IAddListButtonProps"
import { watchStatuses } from "../../../static/watchStatuses"

import st from "./AddListButton.module.scss"
import { ListButtonSwitch } from "./ListButtonSwitch/ListButtonSwitch"

const AddListButton = (props: IAddListButtonProps) => {
  const { animeStatus, _id, updateUserData } = props

  const { data: session } = useSession()

  const addListButtonsRef = useRef<IDropdownRef>(null)

  const updateListStatus = async (value: EListStatus) => {
    addListButtonsRef.current?.closeMenu()

    if (value === "cancel")
      await removeAnimeFromList({
        accessToken: session?.accessToken ?? "",
        animeId: _id ?? "",
      })
    else
      await addUpdateAnimeFromList({
        accessToken: session?.accessToken ?? "",
        animeId: _id ?? "",
        animeStatus: value,
      })
    await updateUserData()
  }

  return (
    <Dropdown
      dropdownRef={addListButtonsRef}
      isDisabled={!animeStatus}
      callComponent={
        <div className={st.buttonWrapper}>
          <ListButtonSwitch {...props} />
          {animeStatus && (
            <Text weight="700" size="12">
              Изменить
            </Text>
          )}
        </div>
      }
    >
      <div className={st.menu}>
        {watchStatuses
          .filter((item) => item !== animeStatus)
          .map((item) => (
            <WatchStatus
              key={item}
              status={item}
              onClick={() => updateListStatus(item)}
            />
          ))}
      </div>
    </Dropdown>
  )
}

export { AddListButton }
