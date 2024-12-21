import { CheckIcon, PlayIcon, StarIcon, TrashIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { Button } from "@shared/ui/molecules"

import st from "../AddListButton.module.scss"
import { IAddListButtonProps } from "../../../../types/IAddListButtonProps"

import { useListButtonSwitch } from "./useListButtonSwitch"

const ListButtonSwitch = (props: IAddListButtonProps) => {
  const { userAnimeStatus, addAnimeInList } = useListButtonSwitch(props)

  return (
    {
      completed: (
        <Button
          renderRightIcon={(iconProps) => <CheckIcon {...iconProps} />}
          className={cn(st.root, st[`root_${userAnimeStatus}`])}
        >
          Просмотрено
        </Button>
      ),
      added: (
        <Button
          renderRightIcon={(iconProps) => (
            <StarIcon {...iconProps} variant="filled" />
          )}
          className={cn(st.root, st[`root_${userAnimeStatus}`])}
        >
          Добавлен
        </Button>
      ),
      watching: (
        <Button
          renderRightIcon={(iconProps) => <PlayIcon {...iconProps} />}
          className={cn(st.root, st[`root_${userAnimeStatus}`])}
        >
          Смотрю
        </Button>
      ),
      dropped: (
        <Button
          renderRightIcon={(iconProps) => <TrashIcon {...iconProps} />}
          className={cn(st.root, st[`root_${userAnimeStatus}`])}
        >
          Брошено
        </Button>
      ),
      setWatch: null,
      cancel: null,
      skipped: null,
    }[userAnimeStatus ?? "setWatch"] ?? (
      <Button onClick={addAnimeInList} className={st.root}>
        Добавить в список
      </Button>
    )
  )
}

export { ListButtonSwitch }
