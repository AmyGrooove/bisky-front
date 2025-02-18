import Link from 'next/link'

import { cn } from '@shared/utils/functions'
import { getScoreColor } from '@entities/animeEstimate/utils'
import { THistoryTypes } from '@entities/history/types'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Hint } from '@shared/ui/molecules/Hint'
import { Text } from '@shared/ui/atoms/Text'

import { animeListText } from '../../utils/animeListText'
import { IHistoryItemProps } from '../../types/IHistoryItemProps'

import st from './HistoryType.module.scss'

const HistoryType = (
  type: THistoryTypes,
  historyData: IHistoryItemProps['data']['historyData'],
) => {
  const {
    fastFindSkippedCount = null,
    fastFindAddedCount = null,
    animeEstimateIsFavorite = null,
    animeEstimateScore = null,
    animeEstimateListStatus = null,
    _id = null,
    poster = null,
    label = null,
  } = historyData

  const isFastFind = type === 'fastFind'

  const hintText = isFastFind ? 'Перейти в Быстрый поиск' : (label ?? null)
  const linkHref = isFastFind ? '/fastFind' : `/anime/${_id}`

  return (
    <Hint hintChildren={hintText} position="top-start">
      <Link
        href={linkHref}
        className={cn(st.leftSide, { [st.leftSide_column]: isFastFind })}
      >
        {
          {
            animeScore: (
              <>
                <PlaceholderImage src={poster} className={st.poster} />
                {animeEstimateScore ? (
                  <div className={st.rowText}>
                    <Text className={st.text} weight="700">
                      Оценил аниме на
                    </Text>
                    <Text
                      weight="700"
                      isCustomColor
                      className={cn(
                        st.text,
                        st[`score_${getScoreColor(animeEstimateScore)}`],
                      )}
                    >
                      {String(animeEstimateScore)}
                    </Text>
                  </div>
                ) : (
                  <Text className={st.text} weight="700">
                    Удалил оценку у аниме
                  </Text>
                )}
              </>
            ),
            animeList: (
              <>
                <PlaceholderImage src={poster} className={st.poster} />
                <Text className={st.text} weight="700">
                  {animeListText(animeEstimateListStatus)}
                </Text>
              </>
            ),
            fastFind: (
              <>
                <Text className={st.text} weight="700">
                  Добавил аниме через быстрый поиск
                </Text>
                <div className={st.columnText}>
                  <div className={st.rowText}>
                    <Text className={st.text}>В свой список:</Text>
                    <Text className={st.text} weight="700">
                      {String(fastFindAddedCount)}
                    </Text>
                  </div>
                  <div className={st.rowText}>
                    <Text className={st.text}>В список исключаемых:</Text>
                    <Text className={st.text} weight="700">
                      {String(fastFindSkippedCount)}
                    </Text>
                  </div>
                </div>
              </>
            ),
            animeFavorite: (
              <>
                <PlaceholderImage src={poster} className={st.poster} />
                {animeEstimateIsFavorite ? (
                  <Text className={st.text} weight="700">
                    Добавил аниме в избранное
                  </Text>
                ) : (
                  <Text className={st.text} weight="700">
                    Удалил аниме из избранного
                  </Text>
                )}
              </>
            ),
          }[type]
        }
      </Link>
    </Hint>
  )
}

export { HistoryType }
