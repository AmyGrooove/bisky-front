import { Skeleton } from "@shared/ui/atoms"
import { homeLoadingStyles as st } from "@appData/home"

const HomeLoading = () => (
  <div className={st.root}>
    <Skeleton className={st.season} />
    <div className={st.row}>
      <Skeleton className={st.rowLabel} />
      <div className={st.rowSlider}>
        <Skeleton templates="posterCard" />
        <Skeleton templates="posterCard" />
        <Skeleton templates="posterCard" />
        <Skeleton templates="posterCard" />
        <Skeleton templates="posterCard" />
        <Skeleton templates="posterCard" />
      </div>
    </div>
    <div className={st.row}>
      <Skeleton className={st.rowLabel} />
      <div className={st.rowSlider}>
        <div className={st.rowTwoColumn}>
          <Skeleton templates="posterCard" />
          <Skeleton templates="posterCard" />
        </div>
        <div className={st.rowTwoColumn}>
          <Skeleton templates="posterCard" />
          <Skeleton templates="posterCard" />
        </div>
        <div className={st.rowTwoColumn}>
          <Skeleton templates="posterCard" />
          <Skeleton templates="posterCard" />
        </div>
        <div className={st.rowTwoColumn}>
          <Skeleton templates="posterCard" />
          <Skeleton templates="posterCard" />
        </div>
        <div className={st.rowTwoColumn}>
          <Skeleton templates="posterCard" />
          <Skeleton templates="posterCard" />
        </div>
        <div className={st.rowTwoColumn}>
          <Skeleton templates="posterCard" />
          <Skeleton templates="posterCard" />
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
