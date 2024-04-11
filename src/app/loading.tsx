import { Skeleton } from "@shared/ui/atoms"
import { homeLoadingStyles as st } from "@appData/home"

const HomeLoading = () => (
  <div className={st.root}>
    <Skeleton className={st.season} />
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
        <div className={st.rowTwoColumn}>
          <Skeleton className={st.rowCard} />
          <Skeleton className={st.rowCard} />
        </div>
        <div className={st.rowTwoColumn}>
          <Skeleton className={st.rowCard} />
          <Skeleton className={st.rowCard} />
        </div>
        <div className={st.rowTwoColumn}>
          <Skeleton className={st.rowCard} />
          <Skeleton className={st.rowCard} />
        </div>
        <div className={st.rowTwoColumn}>
          <Skeleton className={st.rowCard} />
          <Skeleton className={st.rowCard} />
        </div>
        <div className={st.rowTwoColumn}>
          <Skeleton className={st.rowCard} />
          <Skeleton className={st.rowCard} />
        </div>
        <div className={st.rowTwoColumn}>
          <Skeleton className={st.rowCard} />
          <Skeleton className={st.rowCard} />
        </div>
      </div>
    </div>
    <div className={st.row}>
      <Skeleton className={st.rowLabel} />
      <div className={st.rowSlider}>
        <Skeleton className={st.genreCard} />
        <Skeleton className={st.genreCard} />
        <Skeleton className={st.genreCard} />
      </div>
    </div>
    <Skeleton className={st.factCard} />
  </div>
)

export default HomeLoading
