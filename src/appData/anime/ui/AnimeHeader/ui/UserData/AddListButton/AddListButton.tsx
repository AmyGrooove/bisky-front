import { Dropdown } from "@shared/ui/atoms/Dropdown"
import { Text } from "@shared/ui/atoms/Text"
import { AddInListMenu } from "@entities/AnimeEstimate"

import { IAddListButtonProps } from "../../../types/IAddListButtonProps"

import st from "./AddListButton.module.scss"
import { ListButtonSwitch } from "./ListButtonSwitch/ListButtonSwitch"
import { useAddListButton } from "./useAddListButton"

const AddListButton = (props: IAddListButtonProps) => {
  const {
    addListButtonsRef,
    userAnimeStatus,
    _id,
    updateListStatus,
    animeStatus,
  } = useAddListButton(props)

  return (
    <Dropdown
      ref={addListButtonsRef}
      isDisabled={!userAnimeStatus}
      callComponent={
        <div className={st.buttonWrapper}>
          <ListButtonSwitch {...props} />
          {userAnimeStatus && (
            <Text weight="700" size="12">
              Изменить
            </Text>
          )}
        </div>
      }
    >
      <div className={st.menu}>
        <AddInListMenu
          animeStatus={animeStatus}
          _id={_id}
          currentUserStatus={userAnimeStatus}
          onChange={updateListStatus}
        />
      </div>
    </Dropdown>
  )
}

export { AddListButton }
