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
  variant: 'big' | 'small',
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

  const defaultSize = variant === 'big' ? '16' : '12'

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
                <PlaceholderImage
                  src={poster}
                  width={40}
                  height={64}
                  className={st.poster}
                />
                {animeEstimateScore ? (
                  <div className={st.rowText}>
                    <Text size={defaultSize} weight="700">
                      Оценил аниме на
                    </Text>
                    <Text
                      size={defaultSize}
                      weight="700"
                      isCustomColor
                      className={
                        st[`score_${getScoreColor(animeEstimateScore)}`]
                      }
                    >
                      {String(animeEstimateScore)}
                    </Text>
                  </div>
                ) : (
                  <Text size={defaultSize} weight="700">
                    Удалил оценку у аниме
                  </Text>
                )}
              </>
            ),
            animeList: (
              <>
                <PlaceholderImage
                  src={poster}
                  width={40}
                  height={64}
                  className={st.poster}
                />
                <Text size={defaultSize} weight="700">
                  {animeListText(animeEstimateListStatus)}
                </Text>
              </>
            ),
            fastFind: (
              <>
                <Text size={defaultSize} weight="700">
                  Добавил аниме через быстрый поиск
                </Text>
                <div className={st.columnText}>
                  <div className={st.rowText}>
                    <Text size={defaultSize}>В свой список:</Text>
                    <Text size={defaultSize} weight="700">
                      {String(fastFindAddedCount)}
                    </Text>
                  </div>
                  <div className={st.rowText}>
                    <Text size={defaultSize}>В список исключаемых:</Text>
                    <Text size={defaultSize} weight="700">
                      {String(fastFindSkippedCount)}
                    </Text>
                  </div>
                </div>
              </>
            ),
            animeFavorite: (
              <>
                <PlaceholderImage
                  src={poster}
                  width={40}
                  height={64}
                  className={st.poster}
                />
                {animeEstimateIsFavorite ? (
                  <Text size={defaultSize} weight="700">
                    Добавил аниме в избранное
                  </Text>
                ) : (
                  <Text size={defaultSize} weight="700">
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
