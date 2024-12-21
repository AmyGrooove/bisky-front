import {
  AdditionalInfo,
  AnimeHeader,
  IAnimePageProps,
  PlayerModule,
  ScreenshotSlider,
  VideoSlider,
  animePageStyles as st,
} from "@appData/anime"
import { getCurrentAnimeData } from "@appData/anime/api"
import { AnimeCardSlider } from "@features/AnimeCardSlider"
import { Text } from "@shared/ui/atoms"
import { LinkLabel } from "@shared/ui/molecules"
import { OversizeText } from "@shared/ui/molecules/OversizeText"

const AnimePage = async (props: IAnimePageProps) => {
  const { animeId } = await props.params

  const animeData = await getCurrentAnimeData({ animeId })

  return (
    <div className={st.root}>
      <AnimeHeader animeData={animeData} className={st.animeHeader} />
      <AdditionalInfo animeData={animeData} />
      {animeData?.description?.ru !== null && (
        <OversizeText size="16">
          {animeData?.description?.ru ?? ""}
        </OversizeText>
      )}
      <PlayerModule animeShikiId={animeData?.shikiId} />
      {animeData?.related?.filter((item) => !!item.base).length !== 0 && (
        <div className={st.row}>
          {animeData?.franchise ? (
            <LinkLabel
              label="Связанное"
              linkText="Франшиза"
              href={`/franchise/${animeData.franchise._id}`}
            />
          ) : (
            <Text size="28" weight="700">
              Связанное
            </Text>
          )}
          <AnimeCardSlider
            items={
              animeData?.related
                ?.filter((item) => !!item.base)
                .map((item) => ({
                  ...item.base!,
                  relatedName: item.relation?.ru ?? "",
                })) ?? []
            }
            className={st.sliders}
          />
        </div>
      )}
      {animeData?.screenshots?.length !== 0 && (
        <ScreenshotSlider items={animeData.screenshots ?? []} />
      )}
      {animeData?.videos?.length !== 0 && (
        <VideoSlider items={animeData.videos ?? []} />
      )}
    </div>
  )
}

export default AnimePage
