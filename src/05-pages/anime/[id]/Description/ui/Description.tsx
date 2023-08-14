import { MaskIcon, PaintIcon } from "@/01-shared/ui/icons"
import { Collapse } from "@/01-shared/ui/Collapse"
import { GenreType } from "@/02-entities/genre"
import { StudioType } from "@/02-entities/studio"

import styles from "./Description.module.scss"

interface IDescription {
  description: string | null
  genres: GenreType[]
  studios: StudioType[]
}

const Description = ({
  description = "",
  genres = [],
  studios = [],
}: IDescription) => {
  const genresLabel = genres.map((genre) => genre.name.ru).join(", ")
  const studiosLabel = studios.map((studio) => studio.name).join(", ")

  return (
    <>
      <div className={styles.genres}>
        <div className={styles.genres__item}>
          <MaskIcon size={20} />
          <span>{genresLabel}</span>
        </div>
        <div className={styles.genres__item}>
          <PaintIcon size={20} />
          <span>{studiosLabel}</span>
        </div>
      </div>
      {description && <Collapse>{description}</Collapse>}
    </>
  )
}

export { Description }
