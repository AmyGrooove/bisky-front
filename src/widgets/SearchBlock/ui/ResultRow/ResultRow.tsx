import Link from "next/link"

import { PlaceholderImage, Text } from "@shared/ui/atoms"
import { CalendarIcon, ClockIcon } from "@shared/icons"
import { getNormalKind, getSeasonName } from "@entities/Anime"
import { closeModal } from "@widgets/ModalProvider"

import { IResultRowProps } from "../../types/IResultRowProps"

import st from "./ResultRow.module.scss"
import { useResultRow } from "./useResultRow"

const ResultRow = (props: IResultRowProps) => {
  const { animeData } = useResultRow(props)

  return (
    <Link
      href={`/anime/${animeData?._id}`}
      onClick={() => closeModal()}
      className={st.root}
    >
      <PlaceholderImage
        width={60}
        height={80}
        src={animeData.poster ?? ""}
        alt=""
        className={st.poster}
        imageClassName={st.posterImage}
      />
      <div className={st.main}>
        <div className={st.nothing} />
        <Text weight="700" className={st.label}>
          {animeData?.labels?.ru ?? animeData?.labels?.en ?? ""}
        </Text>
        <div className={st.additionalInfo}>
          <div className={st.info}>
            <ClockIcon className={st.icon} />
            <Text
              size="12"
              className={st.infoText}
            >{`${getNormalKind(animeData.kind ?? "none")}`}</Text>
          </div>
          <div className={st.info}>
            <CalendarIcon className={st.icon} />
            <Text size="12" className={st.infoText}>
              {animeData.status === "anons"
                ? "анонс"
                : animeData.status === "released"
                  ? getSeasonName(animeData.dates?.airedOn)
                  : String(animeData.episodes?.airedCount) + " серия"}
            </Text>
          </div>
        </div>
      </div>
    </Link>
  )
}

export { ResultRow }
