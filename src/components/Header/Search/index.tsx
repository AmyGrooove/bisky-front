import AmyImage from "@/components/Common/AmyImage"
import styles from "./index.module.scss"
import { SEARCH } from "@/constants"

const Search = () => {
  return (
    <>
      <div className={styles.search__form}>
        <input
          type="text"
          placeholder="Поиск"
          className={styles.search__form__input}
        />
        <AmyImage
          src={SEARCH}
          width={20}
          height={20}
          className={styles.search__form__icon}
        />
      </div>
    </>
  )
}

export default Search
