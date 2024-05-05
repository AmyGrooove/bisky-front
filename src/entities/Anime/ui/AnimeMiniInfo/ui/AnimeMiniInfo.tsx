import { Text } from "@shared/ui/atoms"
import { cn, getNormalDate } from "@shared/utils/functions"

import { IAnimeMiniInfoProps } from "../types/IAnimeMiniInfoProps"

import st from "./AnimeMiniInfo.module.scss"

const AnimeMiniInfo = (props: IAnimeMiniInfoProps) => {
  const { animeData } = props

  return (
    <div className={st.root}>
      <div className={cn(st.infoBlock, st.infoBlock_underline)}>
        <Text weight="700">Другие названия:</Text>
        <div className={st.labelsWrapper}>
          {(animeData.labels?.synonyms ?? []).map((item) => (
            <Text key={item} className={st.textUnderline}>
              {item}
            </Text>
          ))}
        </div>
      </div>
      <div className={cn(st.infoBlock, st.infoBlock_underline)}>
        <Text weight="700">Количество серий:</Text>
        <Text>{`${animeData.episodes?.airedCount ?? "?"}/${animeData.episodes?.count ?? "?"}`}</Text>
      </div>
      <div className={cn(st.infoBlock, st.infoBlock_underline)}>
        <div className={st.infoBlock}>
          <Text weight="700">Дата выхода первой серии:</Text>
          <Text>
            {animeData.dates?.airedOn
              ? getNormalDate(animeData.dates.airedOn)
              : "?"}
          </Text>
        </div>
        <div className={st.infoBlock}>
          <Text weight="700">Дата выхода последней серии:</Text>
          <Text>
            {animeData.dates?.releasedOn
              ? getNormalDate(animeData.dates.releasedOn)
              : "?"}
          </Text>
        </div>
      </div>
      <div className={cn(st.infoBlock, st.infoBlock_underline)}>
        <Text weight="700">Дата последнего обновления (на сайте):</Text>
        <Text>
          {animeData.updateDate ? getNormalDate(animeData.updateDate) : "?"}
        </Text>
      </div>
    </div>
  )
}

export { AnimeMiniInfo }
