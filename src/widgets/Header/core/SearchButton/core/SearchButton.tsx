import { SearchIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'

import st from './SearchButton.module.scss'
import { useSearchButton } from './useSearchButton'

const SearchButton = () => {
  const { handleClick } = useSearchButton()

  return (
    <button onClick={handleClick} className={st.root}>
      <div className={st.searchLabel}>
        <SearchIcon className={st.searchIcon} />
        <Text className={st.searchText}>Поиск...</Text>
      </div>
      <Text className={st.hotKey} weight="700">
        Ctrl + K
      </Text>
    </button>
  )
}

export { SearchButton }
