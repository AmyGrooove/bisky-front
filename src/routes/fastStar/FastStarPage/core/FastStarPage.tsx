'use client'

import {
  CassetteTapeIcon,
  HeartIcon,
  HeartOffIcon,
  InfoIcon,
  MoveRightIcon,
  StarIcon,
} from '@shared/icons'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import st from './FastStarPage.module.scss'
import { useFastStarPage } from './useFastStarPage'
import { FastStarLoading } from '@routes/fastStar/FastStarLoading'
import { Text } from '@shared/ui/atoms/Text'
import { MiniAnimeInfoModal } from '@entities/anime/ui/MiniAnimeInfoModal'
import { Button } from '@shared/ui/molecules/Button'
import { setModal } from '@widgets/ModalWrapper'
import { StarSlider } from '@shared/ui/atoms/StarSlider'
import { GlassButton } from '@shared/ui/molecules/GlassButton'
import { cn } from '@shared/utils/functions'
import { getScoreColor } from '@entities/animeEstimate/utils'
import { Badge } from '@shared/ui/molecules/Badge'

const FastStarPage = () => {
  const {
    currentAnime,
    isLoading,
    isError,
    currentScore,
    setCurrentScore,
    newScore,
    currentEstimate,
    isInFavorite,
    addAnimeInFavorite,
    setNewAnimeScore,
  } = useFastStarPage()

  if (isLoading || isError) return <FastStarLoading />

  return (
    <>
      <SectionLabel className={st.sectionLabel} Icon={StarIcon}>
        Быстрая оценка
      </SectionLabel>
      <div className={st.root}>
        <div className={st.main}>
          <Badge
            variant="medium"
            Icon={currentEstimate.Icon}
            isCustomColor
            className={cn(
              st[`badgeEstimate_${currentAnime.userListStatus}`],
              st.badgeEstimate_mobile,
            )}
          >
            {currentEstimate.children}
          </Badge>
          <div className={st.posterWrapper}>
            <PlaceholderImage
              src={currentAnime.poster}
              className={st.poster}
              sizes={[220, 180]}
            />
            <Text weight="700" className={st.label} maxLines={2}>
              {currentAnime.label}
            </Text>
          </div>
          <div className={st.info}>
            <Badge
              variant="medium"
              Icon={currentEstimate.Icon}
              isCustomColor
              className={cn(
                st[`badgeEstimate_${currentAnime.userListStatus}`],
                st.badgeEstimate_desktop,
              )}
            >
              {currentEstimate.children}
            </Badge>
            <StarSlider
              currentStar={currentScore}
              setCurrentStart={setCurrentScore}
            />
            <div className={st.starData}>
              <div className={st.scoreCount}>
                <CassetteTapeIcon className={st.scoreCountIcon} />
                <Text weight="700" className={st.scoreCountLabel}>
                  {currentAnime.scoreCount}
                </Text>
              </div>
              <div className={st.scoreChange}>
                <Text
                  weight="700"
                  className={cn(
                    st.scoreText,
                    st[`scoreText_${getScoreColor(currentAnime.score)}`],
                  )}
                >
                  {currentAnime.score}
                </Text>
                <MoveRightIcon className={st.rightIcon} />
                <Text
                  weight="700"
                  className={cn(
                    st.scoreText,
                    st[`scoreText_${getScoreColor(newScore)}`],
                  )}
                >
                  {newScore}
                </Text>
              </div>
              <GlassButton
                className={cn(st.button, {
                  [st.buttonFavorite_active]: isInFavorite,
                })}
                onClick={async (event) => {
                  event.preventDefault()
                  await addAnimeInFavorite()
                }}
              >
                {isInFavorite ? HeartOffIcon : HeartIcon}
              </GlassButton>
            </div>
            <Button
              variant="big"
              onClick={setNewAnimeScore}
              className={cn(st.goNext, st.goNext_desktop)}
            >
              Дальше
            </Button>
          </div>
          <Button
            onClick={() =>
              setModal(<MiniAnimeInfoModal animeID={currentAnime._id} />)
            }
            Icon={InfoIcon}
            className={st.infoButton}
            variant="big"
          />
          <PlaceholderImage
            src={currentAnime.poster}
            className={st.background}
            sizes={[700, 300]}
          />
        </div>
      </div>
      <div className={st.mobileControl}>
        <Button
          variant="big"
          onClick={() => {}}
          className={cn(st.goNext, st.goNext_mobile)}
        >
          Дальше
        </Button>
      </div>
      <div className={st.emptyControl} />
    </>
  )
}

export { FastStarPage }
