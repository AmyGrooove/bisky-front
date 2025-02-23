import { SearchIcon } from '@shared/icons'
import st from './SearchButton.module.scss'
import { Text } from '@shared/ui/atoms/Text'
import { setModal } from '@widgets/ModalWrapper'
import { SearchModule } from '@entities/search/ui/SearchModule'

const SearchButton = () => {
  return (
    <button onClick={() => setModal(<SearchModule />)} className={st.root}>
      <div className={st.searchLabel}>
        <SearchIcon className={st.searchIcon} isCustomColor />
        <Text className={st.searchText} isCustomColor>
          Поиск...
        </Text>
      </div>
      <Text className={st.hotKey} weight="700" isCustomColor>
        Ctrl + K
      </Text>
    </button>
  )
}

export { SearchButton }
