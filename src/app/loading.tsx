import { Skeleton } from "@shared/ui/atoms"
import { homeLoadingStyles as st } from "@appData/home"

const HomeLoading = () => (
  <div className={st.root}>
    <div className={st.seasonSlider}>
      <Skeleton className={st.season} />
      <Skeleton className={st.season} />
      <Skeleton className={st.season} />
    </div>
    <div className={st.row}>
      <Skeleton className={st.rowLabel} />
      <div className={st.rowSlider}>
        {[...Array(10)].map((_, index) => (
          <Skeleton key={index + "newSeries"} templates="posterCard" />
        ))}
      </div>
    </div>
    <div className={st.row}>
      <Skeleton className={st.rowLabel} />
      <div className={st.rowSlider}>
        {[...Array(10)].map((_, index) => (
          <div key={index + "best"} className={st.rowTwoColumn}>
            <Skeleton templates="posterCard" />
            <Skeleton templates="posterCard" />
          </div>
        ))}
      </div>
    </div>
    <div className={st.row}>
      <Skeleton className={st.rowLabel} />
      <div className={st.rowSlider}>
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index + "genre"} className={st.genreCard} />
        ))}
      </div>
    </div>
    <Skeleton className={st.factCard} />
  </div>
)

export default HomeLoading
