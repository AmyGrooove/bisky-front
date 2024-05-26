import { CircleViews, Text } from "@shared/ui/atoms"
import { cn } from "@shared/utils/functions"
import { StarIcon, PlayIcon, CheckIcon, TrashIcon } from "@shared/icons"

import { IAnimesListDataProps } from "../types/IAnimesListDataProps"

import st from "./AnimesListData.module.scss"

const AnimesListData = (props: IAnimesListDataProps) => {
  const { animeList } = props

  return (
    <div className={st.root}>
      <div className={st.listData}>
        <div className={st.listRow}>
          <Text size="20" className={st.list_general}>
            Всего
          </Text>
          <Text size="20" weight="700">
            {animeList.generalCount}
          </Text>
        </div>
        <div className={st.listRow}>
          <StarIcon variant="filled" className={cn(st.icon, st.icon_added)} />
          <Text size="20" isDefaultColor={false} className={st.list_added}>
            В планах
          </Text>
          <Text size="20" weight="700">
            {animeList.addedCount}
          </Text>
        </div>
        <div className={st.listRow}>
          <PlayIcon className={cn(st.icon, st.icon_watching)} />
          <Text size="20" isDefaultColor={false} className={st.list_watching}>
            Смотрю
          </Text>
          <Text size="20" weight="700">
            {animeList.watchingCount}
          </Text>
        </div>
        <div className={st.listRow}>
          <CheckIcon className={cn(st.icon, st.icon_completed)} />
          <Text size="20" isDefaultColor={false} className={st.list_completed}>
            Просмотрено
          </Text>
          <Text size="20" weight="700">
            {animeList.completedCount}
          </Text>
        </div>
        <div className={st.listRow}>
          <TrashIcon className={cn(st.icon, st.icon_dropped)} />
          <Text size="20" isDefaultColor={false} className={st.list_dropped}>
            Брошено
          </Text>
          <Text size="20" weight="700">
            {animeList.droppedCount}
          </Text>
        </div>
      </div>
      <CircleViews
        className={st.circle}
        addedCount={animeList.addedCount}
        completeCount={animeList.completedCount}
        droppedCount={animeList.droppedCount}
        watchingCount={animeList.watchingCount}
      />
    </div>
  )
}

export { AnimesListData }
