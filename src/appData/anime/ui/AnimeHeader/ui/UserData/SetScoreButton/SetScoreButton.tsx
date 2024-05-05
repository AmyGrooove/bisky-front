import { cn } from "@shared/utils/functions"
import { StarIcon } from "@shared/icons"
import { Dropdown, Text, WatchStatus } from "@shared/ui/atoms"
import { Button, getScoreStatus } from "@shared/ui/molecules"

import { ISetScoreButtonProps } from "../../../types/ISetScoreButtonProps"
import { getInverseNumber } from "../../../static/getInverseNumber"

import st from "./SetScoreButton.module.scss"
import { useSetScoreButton } from "./useSetScoreButton"

const SetScoreButton = (props: ISetScoreButtonProps) => {
  const { animeScore } = props

  const { addListButtonsRef, updateListStatus } = useSetScoreButton(props)

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
                  (animeScore ?? -1) >= getInverseNumber(index) + 1,
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
