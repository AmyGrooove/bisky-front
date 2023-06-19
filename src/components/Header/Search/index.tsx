import Input from "@/components/Common/Input"
import { SearchIcon } from "@/Icons"
import IconButton from "@/components/Common/IconButton"

import styles from "./index.module.scss"

const Search = () => {
  return (
    <div className={styles.search}>
      <Input
        variant="dark"
        right={<IconButton icon={<SearchIcon />} />}
        type="text"
        placeholder="Поиск"
      />
    </div>
  )
}

export default Search
