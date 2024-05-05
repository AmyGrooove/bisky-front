import { Dropdown } from "@shared/ui/atoms/Dropdown"
import { WatchStatus } from "@shared/ui/atoms/WatchStatus"
import { Text } from "@shared/ui/atoms/Text"

import { IAddListButtonProps } from "../../../types/IAddListButtonProps"
import { watchStatuses } from "../../../static/watchStatuses"

import st from "./AddListButton.module.scss"
import { ListButtonSwitch } from "./ListButtonSwitch/ListButtonSwitch"
import { useAddListButton } from "./useAddListButton"

const AddListButton = (props: IAddListButtonProps) => {
  const { animeStatus } = props

  const { addListButtonsRef, updateListStatus } = useAddListButton(props)

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
