import { animePageLoadingStyles as st } from "@appData/animePage"
import { Skeleton } from "@shared/ui/atoms"

const LoadingAnime = () => (
  <>
    <Skeleton className={st.background} />
    <div className={st.root}>
      <div className={st.header}>
        <Skeleton className={st.poster} />
        <div className={st.headerInfo}>
          <div className={st.headerTextWrapper}>
            <div className={st.labels}>
              <Skeleton className={st.mainLabel} />
              <Skeleton className={st.additionalLabel} />
              <Skeleton className={st.rating} />
            </div>
            <div className={st.headerMiniInfo}>
              <Skeleton className={st.miniText} />
              <Skeleton className={st.miniText} />
              <Skeleton className={st.miniText} />
            </div>
          </div>
          <Skeleton className={st.headerButton} />
        </div>
      </div>
      <div className={st.userData}>
        <div className={st.scoreWrapper}>
          <Skeleton className={st.score} />
          <div className={st.otherInfoWrapper}>
            <Skeleton className={st.otherInfo} />
            <Skeleton className={st.otherInfo} />
          </div>
        </div>
        <div className={st.listWrapper}>
          <Skeleton className={st.listLabel} />
          <Skeleton className={st.listCircle} />
        </div>
      </div>
      <Skeleton className={st.description} />
      <Skeleton className={st.player} />
      <div className={st.row}>
        <Skeleton className={st.rowLabel} />
        <div className={st.rowSlider}>
          <Skeleton className={st.rowCard} />
          <Skeleton className={st.rowCard} />
          <Skeleton className={st.rowCard} />
          <Skeleton className={st.rowCard} />
          <Skeleton className={st.rowCard} />
          <Skeleton className={st.rowCard} />
        </div>
      </div>
      <div className={st.row}>
        <Skeleton className={st.rowLabel} />
        <div className={st.rowSlider}>
          <Skeleton className={st.bigCard} />
          <Skeleton className={st.bigCard} />
        </div>
      </div>
      <div className={st.row}>
        <Skeleton className={st.rowLabel} />
        <div className={st.rowSlider}>
          <Skeleton className={st.bigCard} />
          <Skeleton className={st.bigCard} />
        </div>
      </div>
    </div>
  </>
)

export default LoadingAnime
