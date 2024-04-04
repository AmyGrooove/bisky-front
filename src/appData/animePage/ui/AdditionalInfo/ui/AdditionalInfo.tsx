import { Text } from "@shared/ui/atoms/Text"
import { Badge } from "@shared/ui/molecules/Badge"
import {
  CheckIcon,
  MaskIcon,
  PaintIcon,
  PlayIcon,
  StarIcon,
  TrashIcon,
} from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { CircleViews } from "@shared/ui/atoms/CircleViews"

import { IAdditionalInfoProps } from "../types/IAdditionalInfoProps"

import st from "./AdditionalInfo.module.scss"

const AdditionalInfo = (props: IAdditionalInfoProps) => {
  const { animeData, className, ...otherProps } = props

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <div className={st.leftSide}>
        <div className={st.score}>
          <Text size="32" weight="700">
            Рейтинг
          </Text>
          <Badge
            variant="big"
            isScoreStatus
            leftIcon={<StarIcon variant="filled" />}
          >
            {String(animeData.score?.averageScore)}
          </Badge>
          <Text
            className={st.scoreCount}
          >{`${animeData.score?.count} оценок`}</Text>
        </div>
        <div className={st.additionalInfo}>
          <div className={st.infoRow}>
            <MaskIcon className={st.leftIcon} />
            <Text size="20" className={st.leftText}>
              {animeData.genres?.map((item) => item.name?.ru).join(", ") ?? ""}
            </Text>
          </div>
          {animeData.studios?.length !== 0 && (
            <div className={st.infoRow}>
              <PaintIcon className={st.leftIcon} />
              <Text size="20" className={st.leftText}>
                {animeData.studios?.map((item) => item.name).join(", ") ?? ""}
              </Text>
            </div>
          )}
        </div>
      </div>
      <div className={st.rightSide}>
        <Text size="32" weight="700">
          В списках
        </Text>
        <div className={st.listWrapper}>
          <div className={st.listData}>
            <div className={st.listRow}>
              <Text size="20" className={st.list_general}>
                Всего
              </Text>
              <Text size="20" weight="700">
                {animeData.usersList?.generalCount ?? 0}
              </Text>
            </div>
            <div className={st.listRow}>
              <StarIcon
                variant="filled"
                className={cn(st.rightIcon, st.rightIcon_added)}
              />
              <Text size="20" isDefaultColor={false} className={st.list_added}>
                В планах
              </Text>
              <Text size="20" weight="700">
                {animeData.usersList?.addedCount ?? 0}
              </Text>
            </div>
            <div className={st.listRow}>
              <PlayIcon className={cn(st.rightIcon, st.rightIcon_watching)} />
              <Text
                size="20"
                isDefaultColor={false}
                className={st.list_watching}
              >
                Смотрю
              </Text>
              <Text size="20" weight="700">
                {animeData.usersList?.watchingCount ?? 0}
              </Text>
            </div>
            <div className={st.listRow}>
              <CheckIcon className={cn(st.rightIcon, st.rightIcon_completed)} />
              <Text
                size="20"
                isDefaultColor={false}
                className={st.list_completed}
              >
                Просмотрено
              </Text>
              <Text size="20" weight="700">
                {animeData.usersList?.completedCount ?? 0}
              </Text>
            </div>
            <div className={st.listRow}>
              <TrashIcon className={cn(st.rightIcon, st.rightIcon_dropped)} />
              <Text
                size="20"
                isDefaultColor={false}
                className={st.list_dropped}
              >
                Брошено
              </Text>
              <Text size="20" weight="700">
                {animeData.usersList?.droppedCount ?? 0}
              </Text>
            </div>
          </div>
          <CircleViews
            className={st.circle}
            addedCount={animeData.usersList?.addedCount ?? 0}
            completeCount={animeData.usersList?.completedCount ?? 0}
            droppedCount={animeData.usersList?.droppedCount ?? 0}
            watchingCount={animeData.usersList?.watchingCount ?? 0}
          />
        </div>
      </div>
    </div>
  )
}

export { AdditionalInfo }
