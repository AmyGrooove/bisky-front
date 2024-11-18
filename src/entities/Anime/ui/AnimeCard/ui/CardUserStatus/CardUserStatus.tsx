"use client"

import { AddInListMenu } from "@entities/AnimeEstimate"
import { WatchStatus } from "@shared/ui/atoms"
import { Hint } from "@shared/ui/molecules"
import { cn } from "@shared/utils/functions"

import { ICardUserStatusProps } from "../../types/ICardUserStatusProps"

import { useCardUserStatus } from "./useCardUserStatus"
import st from "./CardUserStatus.module.scss"

const CardUserStatus = (props: ICardUserStatusProps) => {
  const { userStatus, _id, className, changeStatus } = useCardUserStatus(props)

  return (
    <Hint
      hintElement={
        <AddInListMenu
          _id={_id!}
          currentUserStatus={userStatus}
          onChange={changeStatus}
        />
      }
      hintClassName={st.root}
    >
      <WatchStatus
        disabled
        status={userStatus}
        className={cn(className, {
          [st.clickStatus]: userStatus === "setWatch",
        })}
      />
    </Hint>
  )
}

export { CardUserStatus }
