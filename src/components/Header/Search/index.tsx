import AppImage from "@/components/Common/AppImage"
import { SEARCH } from "@/constants"
import Input from "@/components/Common/Input"

import styles from "./index.module.scss"

const Search = () => {
  return (
    <>
      <div className={styles.search__form}>
        <Input
          variant="dark"
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
