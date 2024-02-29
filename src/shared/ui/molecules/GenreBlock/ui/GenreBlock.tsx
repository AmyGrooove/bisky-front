import Link from "next/link"
import Image from "next/image"

import { Text } from "@shared/ui/atoms/Text"

import { IGenreBlock } from "../types/IGenreBlockProps"

import st from "./GenreBlock.module.scss"

const GenreBlock = (props: IGenreBlock) => {
  const { background, title, description } = props

  return (
    <Link {...props}>
      <div className={st.genre_block}>
        <Text size="24" weight="700">
          {title}
        </Text>
        <Text
          className={st.genre_block__description}
          as="p"
          size="16"
          weight="400"
        >
          {description}
        </Text>
        <div className={st.background_posters}>
          {background.map((path) => (
            <Image
              key={path}
              src={path}
              height={0}
              width={0}
              className={st.background_poster}
              alt=""
            />
          ))}
        </div>
      </div>
    </Link>
  )
}

export { GenreBlock }
