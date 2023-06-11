import AppImage from "@/components/Common/AppImage"
import { SEARCH } from "@/constants"

import styles from "./index.module.scss"

const Search = () => {
  return (
    <>
      <div className={styles.search__form}>
        <input
          type="text"
          placeholder="Поиск"
          className={styles.search__form__input}
        />
        <AppImage
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
