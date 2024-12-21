import {
  CalendarIcon,
  ClockIcon,
  InfoIcon,
  MaskIcon,
  PaintIcon,
  PlayerIcon,
} from "@shared/icons"
import { Text } from "@shared/ui/atoms"
import {
  AnimeMiniInfo,
  getNormalKind,
  getNormalRating,
  getNormalStatus,
  getSeasonName,
} from "@entities/Anime"
import { cn } from "@shared/utils/functions"
import { Badge, Button } from "@shared/ui/molecules"

import { IAdditionalInfoProps } from "../types/IAdditionalInfoProps"

import st from "./AdditionalInfo.module.scss"
import { useAdditionalInfo } from "./useAdditionalInfo"

const AdditionalInfo = (props: IAdditionalInfoProps) => {
  const { currentAnime, setModal } = useAdditionalInfo(props)

  return (
    <div className={st.root}>
      <div className={st.mainInfo}>
        <div className={st.row}>
          <PlayerIcon className={st.icon} />
          <Text size="20">{`${currentAnime.episodes?.airedCount !== 0 ? `${currentAnime.episodes?.airedCount} эп. по ~ ` : ""}${currentAnime.episodes?.duration} мин`}</Text>
        </div>
        <div className={st.row}>
          <ClockIcon className={st.icon} />
          <Text size="20">{`${getNormalKind(currentAnime.kind ?? "none")},`}</Text>
          <Text
            size="20"
            weight="700"
            className={cn(st[`status_${currentAnime.status}`])}
            isDefaultColor={false}
          >
            {getNormalStatus(currentAnime.status ?? "anons")}
          </Text>
        </div>
        <div className={st.row}>
          <CalendarIcon className={st.icon} />
          <Text size="20">{getSeasonName(currentAnime.dates?.airedOn)}</Text>
        </div>
        <div className={st.row}>
          <MaskIcon className={st.icon} />
          <Text size="20" className={st.infoText}>
            {currentAnime.genres?.map((item) => item.name?.ru).join(", ") ?? ""}
          </Text>
        </div>
        {currentAnime.studios?.length !== 0 && (
          <div className={st.row}>
            <PaintIcon className={st.icon} />
            <Text size="20" className={st.infoText}>
              {currentAnime.studios?.map((item) => item.name).join(", ") ?? ""}
            </Text>
          </div>
        )}
      </div>
      <div className={st.subInfo}>
        <Badge isDefaultTextColor={false} className={st.rating}>
          {getNormalRating(currentAnime.rating ?? "none")}
        </Badge>
        <Button
          onClick={() => setModal(<AnimeMiniInfo animeData={currentAnime} />)}
          className={st.miniInfoButton}
          renderLeftIcon={(iconProps) => <InfoIcon {...iconProps} />}
        />
      </div>
    </div>
  )
}

export { AdditionalInfo }
