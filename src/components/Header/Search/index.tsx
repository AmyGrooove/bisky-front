import Input from "@/components/Common/Input"
import { SEARCH } from "@/constants"
import IconButton from "@/components/Common/IconButton"

import styles from "./index.module.scss"

const Search = () => {
  return (
    <div className={styles.search}>
      <Input
        variant="dark"
        right={<IconButton iconName={SEARCH} />}
        type="text"
        placeholder="Поиск"
      />
    </div>
  )
}

export default Search
