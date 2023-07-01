import { MaskIcon, PaintIcon } from "@/components/icons"
import { AnimeInfoType } from "@/types"
import Collapse from "@/components/common/Collapse"

import styles from "./index.module.scss"

interface IDescription extends Partial<AnimeInfoType> {}

const Description = ({
  description = "",
  genres = [],
  studios = [],
}: IDescription) => {
  return (
    <>
      <div className={styles.genres}>
        <div className={styles.genres__item}>
          <MaskIcon size={24} />
          {genres?.map((item, index) => (
            <span key={index}>{item.name.ru}</span>
          ))}
        </div>
        <div className={styles.genres__item}>
          <PaintIcon size={24} />
          {studios?.map((item, index) => (
            <span key={item.id}>{item.name}</span>
          ))}
        </div>
      </div>

      {description && <Collapse>{description}</Collapse>}
    </>
  )
}

export default Description
