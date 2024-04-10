import { cn } from "@shared/utils/functions"
import { Dropdown } from "@shared/ui/atoms/Dropdown"
import { WatchStatus } from "@shared/ui/atoms/WatchStatus"
import { Text } from "@shared/ui/atoms/Text"

import { IAddListButtonProps } from "../../../types/IAddListButtonProps"

import st from "./SetScoreButton.module.scss"
import { ListButtonSwitch } from "./ListButtonSwitch/ListButtonSwitch"

const SetScoreButton = (props: IAddListButtonProps) => {
  const { animeStatus } = props

  return (
    <Dropdown
      isDisabled={!animeStatus}
      callComponent={
        <div className={st.buttonWrapper}>
          {/* <ListButtonSwitch animeStatus={animeStatus} /> */}
          {animeStatus && (
            <Text weight="700" size="12">
              Изменить
            </Text>
          )}
        </div>
      }
    >
      <div className={st.menu}>
        <WatchStatus status="cancel" />
        <WatchStatus status="added" />
        <WatchStatus status="watching" />
        <WatchStatus status="dropped" />
        <WatchStatus status="completed" />
      </div>
    </Dropdown>
  )
}

export { SetScoreButton }
