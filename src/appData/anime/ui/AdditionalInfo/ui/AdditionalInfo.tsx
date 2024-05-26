import { MaskIcon, PaintIcon, StarIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { Text } from "@shared/ui/atoms"
import { AnimesListData, Badge } from "@shared/ui/molecules"

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
            {String(animeData.score?.averageScore?.toFixed(2))}
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
      {animeData.usersList && (
        <div className={st.rightSide}>
          <Text size="32" weight="700">
            В списках
          </Text>
          <AnimesListData animeList={animeData.usersList} />
        </div>
      )}
    </div>
  )
}

export { AdditionalInfo }
