import {
  AdditionalInfo,
  AnimeHeader,
  ScreenshotSlider,
  VideoSlider,
} from "@appData/animePage"
import st from "@appData/animePage/styles/animePage.module.scss"
import { IAnimePageProps } from "@appData/animePage/types/IAnimePageProps"
import { getOneAnimeQL } from "@entities/Anime"
import { AnimeCardSlider } from "@features/AnimeCardSlider"
import { Text } from "@shared/ui/atoms/Text"
import { OversizeText } from "@shared/ui/molecules/OversizeText"

const AnimePage = async (props: IAnimePageProps) => {
  const {
    params: { animeId },
  } = props

  const animeData = await getOneAnimeQL(animeId)

  return (
    <div className={st.root}>
      <AnimeHeader animeData={animeData} className={st.animeHeader} />
      <AdditionalInfo animeData={animeData} />
      {animeData.description?.ru !== null && (
        <OversizeText size="16">{animeData.description?.ru ?? ""}</OversizeText>
      )}
      <div
        style={{
          width: "100%",
          height: "562px",
          backgroundColor: "var(--dark-100)",
        }}
      />
      {animeData.related?.filter((item) => !!item.base).length !== 0 && (
        <div className={st.row}>
          <Text size="28" weight="700">
            Связанное
          </Text>
          <AnimeCardSlider
            items={
              animeData.related
                ?.filter((item) => !!item.base)
                .map((item) => ({
                  relatedName: item.relation?.ru ?? "",
                  ...item.base!,
                })) ?? []
            }
            className={st.sliders}
          />
        </div>
      )}
      {animeData.screenshots?.length !== 0 && (
        <ScreenshotSlider items={animeData.screenshots ?? []} />
      )}
      {animeData.videos?.length !== 0 && (
        <VideoSlider items={animeData.videos ?? []} />
      )}
    </div>
  )
}

export default AnimePage
