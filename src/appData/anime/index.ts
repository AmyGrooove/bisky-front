import animePageStyles from "./styles/animePage.module.scss"
import animeLoadingStyles from "./styles/animeLoading.module.scss"

export type { IAnimeLayoutProps } from "./types/IAnimeLayoutProps"
export type { IAnimePageProps } from "./types/IAnimePageProps"

export { AnimeHeader } from "./ui/AnimeHeader"
export { AdditionalInfo } from "./ui/AdditionalInfo"
export { ScreenshotSlider } from "./ui/ScreenshotSlider"
export { VideoSlider } from "./ui/VideoSlider"
export { PlayerModule } from "./ui/PlayerModule"

export { animeLoadingStyles, animePageStyles }
