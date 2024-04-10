import { useSession } from "next-auth/react"
import { useRef } from "react"

import { updateAnimeScoreInList } from "@entities/AnimeEstimate"
import { WatchStatus } from "@shared/ui/atoms/WatchStatus"
import { Dropdown, IDropdownRef } from "@shared/ui/atoms/Dropdown"
import { Text } from "@shared/ui/atoms/Text"
import { cn } from "@shared/utils/functions"
import { StarIcon } from "@shared/icons"
import { Button } from "@shared/ui/molecules/Button"
import { getScoreStatus } from "@shared/ui/molecules/Badge"

import { ISetScoreButtonProps } from "../../../types/ISetScoreButtonProps"
import { getInverseNumber } from "../../../static/getInverseNumber"

import st from "./SetScoreButton.module.scss"

const SetScoreButton = (props: ISetScoreButtonProps) => {
  const { _id, animeScore, updateUserData } = props

  const { data: session } = useSession()

  const addListButtonsRef = useRef<IDropdownRef>(null)

  const updateListStatus = async (value: number | null) => {
    addListButtonsRef.current?.closeMenu()

    if (animeScore === value) return

    await updateAnimeScoreInList({
      accessToken: session?.accessToken ?? "",
      animeId: _id ?? "",
      animeScore: value,
    })

    await updateUserData()
  }

  return (
    <Dropdown
      dropdownRef={addListButtonsRef}
      callComponent={
        <div className={st.buttonWrapper}>
          <Button
            rightIcon={<StarIcon variant="filled" />}
            className={cn(
              st.root,
              st[`root_${animeScore ? getScoreStatus(animeScore) : 0}`],
            )}
          >
            {String(animeScore ?? "Оценить")}
          </Button>
          {animeScore && (
            <Text weight="700" size="12">
              Изменить
            </Text>
          )}
        </div>
      }
    >
      <div className={st.menu}>
        {animeScore && (
          <WatchStatus status="cancel" onClick={() => updateListStatus(null)} />
        )}
        <div className={st.starWrapper}>
          {[...Array(10)].map((_, index) => (
            <div
              key={index + "star"}
              className={cn(st.starIconWrapper, {
                [st.starIconWrapper_filled]:
                  (animeScore ?? 11) >= getInverseNumber(index) + 1,
              })}
              onClick={() => updateListStatus(getInverseNumber(index) + 1)}
            >
              <StarIcon variant="filled" className={st.starIcon} />
              <Text className={st.starNumber}>
                {getInverseNumber(index) + 1}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Dropdown>
  )
}

export { SetScoreButton }
