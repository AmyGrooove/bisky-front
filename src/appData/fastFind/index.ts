import fastFindErrorStyles from "./styles/fastFindError.module.scss"
import fastFindLoadingStyles from "./styles/fastFindLoading.module.scss"
import fastFindPageStyles from "./styles/fastFindPage.module.scss"

export type { IFastFindLayoutProps } from "./types/IFastFindLayoutProps"
export type { IFastFindPageProps } from "./types/IFastFindPageProps"

export { useFastFindPage } from "./hooks/useFastFindPage"

export { fastFindPageStyles, fastFindErrorStyles, fastFindLoadingStyles }

export { AdditionalInfo } from "./ui/AdditionalInfo"
export { SelectionBlock } from "./ui/SelectionBlock"
export { LeftSideLoading } from "./ui/LeftSideLoading"

export { maxFastFind } from "./static/maxFastFind"
