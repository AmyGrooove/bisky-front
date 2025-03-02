'use client'

import st from './FastSelectPage.module.scss'
import { useFastSelectPage } from './useFastSelectPage'
import { SelectElement } from './SelectElement/SelectElement'
import { Text } from '@shared/ui/atoms/Text'
import { cn } from '@shared/utils/functions'
import { GlassButton } from '@shared/ui/molecules/GlassButton'
import { CrownIcon, MoveLeftIcon } from '@shared/icons'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { FastSelectLoading } from '@routes/fastSelect/FastSelectLoading'

const FastSelectPage = () => {
  const {
    data,
    selectAnime,
    goBackInHistory,
    isFinal,
    leftIndex,
    rightIndex,
    nextIndex,
    isLoading,
  } = useFastSelectPage()

  if (isLoading) return <FastSelectLoading />

  return (
    <>
      <SectionLabel className={st.sectionLabel} Icon={CrownIcon}>
        Быстрый выбор
      </SectionLabel>
      <div className={st.root}>
        {isFinal ? (
          <div className={st.final}></div>
        ) : (
          <div className={st.main}>
            {leftIndex !== null && (
              <SelectElement
                side="left"
                poster={data[leftIndex].poster}
                label={data[leftIndex].label}
                selectThis={() => selectAnime('left')}
                _id={data[leftIndex]._id}
              />
            )}
            {rightIndex !== null && (
              <SelectElement
                side="right"
                poster={data[rightIndex].poster}
                label={data[rightIndex].label}
                selectThis={() => selectAnime('right')}
                _id={data[rightIndex]._id}
              />
            )}
            <div className={st.versusElements}>
              <div className={st.divider} />
              <Text className={st.versus} weight="700">
                VS
              </Text>
              <div className={st.countWrapper}>
                <Text
                  className={cn(st.count, st.count_current)}
                  weight="700"
                  isCustomColor
                >
                  {String(nextIndex)}
                </Text>
                <Text className={st.count} weight="700">
                  {`/${data.length}`}
                </Text>
              </div>
            </div>
            <div className={st.goBackWrapper}>
              <GlassButton
                className={st.goBack}
                onClick={goBackInHistory}
                isDisabled={nextIndex === 2}
              >
                {MoveLeftIcon}
              </GlassButton>
            </div>
          </div>
        )}
      </div>
      <div className={st.mobileControl}>
        <GlassButton onClick={goBackInHistory} isDisabled={nextIndex === 2}>
          {MoveLeftIcon}
        </GlassButton>
        <div className={cn(st.countWrapper, st.countWrapper_mobile)}>
          <Text
            className={cn(st.count, st.count_current)}
            weight="700"
            isCustomColor
          >
            {String(nextIndex)}
          </Text>
          <Text className={st.count} weight="700">
            {`/${data.length}`}
          </Text>
        </div>
        <div className={st.emptyControl} />
      </div>
    </>
  )
}

export { FastSelectPage }
