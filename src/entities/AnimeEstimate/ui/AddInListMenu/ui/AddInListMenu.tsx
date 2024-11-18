import { WatchStatus } from "@shared/ui/atoms"

import { IAddInListMenuProps } from "../types/IAddInListMenuProps"

import { useAddInListMenu } from "./useAddInListMenu"
import st from "./AddInListMenu.module.scss"

const AddInListMenu = (props: IAddInListMenuProps) => {
  const { updateListStatus, filteredWatchStatuses } = useAddInListMenu(props)

  return (
    <div className={st.root}>
      {filteredWatchStatuses.map((item) => (
        <WatchStatus
          key={item}
          status={item}
          onClick={(event) => updateListStatus(item, event)}
        />
      ))}
    </div>
  )
}

export { AddInListMenu }
