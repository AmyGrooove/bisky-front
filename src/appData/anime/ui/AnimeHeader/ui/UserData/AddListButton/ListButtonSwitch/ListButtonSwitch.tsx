import { CheckIcon, PlayIcon, StarIcon, TrashIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { Button } from "@shared/ui/molecules"

import st from "../AddListButton.module.scss"
import { IAddListButtonProps } from "../../../../types/IAddListButtonProps"

import { useListButtonSwitch } from "./useListButtonSwitch"

const ListButtonSwitch = (props: IAddListButtonProps) => {
  const { animeStatus, addAnimeInList } = useListButtonSwitch(props)

  return (
    {
      completed: (
        <Button
          rightIcon={<CheckIcon />}
          className={cn(st.root, st[`root_${animeStatus}`])}
        >
          Просмотрено
        </Button>
      ),
      added: (
        <Button
          rightIcon={<StarIcon variant="filled" />}
          className={cn(st.root, st[`root_${animeStatus}`])}
        >
          Добавлен
        </Button>
      ),
      watching: (
        <Button
          rightIcon={<PlayIcon />}
          className={cn(st.root, st[`root_${animeStatus}`])}
        >
          Смотрю
        </Button>
      ),
      dropped: (
        <Button
          rightIcon={<TrashIcon />}
          className={cn(st.root, st[`root_${animeStatus}`])}
        >
          Брошено
        </Button>
      ),
      setWatch: null,
      cancel: null,
      skipped: null,
    }[animeStatus ?? "setWatch"] ?? (
      <Button onClick={addAnimeInList} className={st.root}>
        Добавить в список
      </Button>
    )
  )
}

export { ListButtonSwitch }
