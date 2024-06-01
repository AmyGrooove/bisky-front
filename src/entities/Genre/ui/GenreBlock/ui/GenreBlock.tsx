import Link from "next/link"

import { Text } from "@shared/ui/atoms/Text"
import { cn } from "@shared/utils/functions"
import { PlaceholderImage } from "@shared/ui/atoms/PlaceholderImage"

import { IGenreBlock } from "../types/IGenreBlockProps"

import st from "./GenreBlock.module.scss"

const GenreBlock = (props: IGenreBlock) => {
  const { genre, className, ...otherProps } = props

  return (
    <Link
      {...otherProps}
      href={`/catalog?genres=${genre._id}`}
      className={cn(st.root, className)}
    >
      <Text size="24" weight="700" className={st.label}>
        {genre.name?.ru ?? ""}
      </Text>
      <Text className={st.description}>{genre?.description?.ru ?? ""}</Text>
      <div className={st.backgroundPosters}>
        {genre?.relatedWorks?.map((item) => (
          <PlaceholderImage
            key={item._id + (genre?.name?.en ?? "")}
            src={item.poster ?? ""}
            width={126}
            height={242}
            className={st.poster}
            imageClassName={st.posterImage}
            alt=""
          />
        ))}
      </div>
    </Link>
  )
}

export { GenreBlock }
