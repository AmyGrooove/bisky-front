import { PlaceholderImage, Text } from '@shared/ui/atoms'
import { LogoIcon, SearchIcon } from '@shared/icons'

import st from './Header.module.scss'

const Header = () => {
  return (
    <div className={st.root}>
      <div className={st.logoWrapper}>
        <LogoIcon className={st.logo} isCustomColor />
        <Text weight="700" size="20">
          Bisky
        </Text>
      </div>
      <div className={st.rightSide}>
        <button className={st.searchButton}>
          <div className={st.searchText}>
            <SearchIcon className={st.searchIcon} />
            <Text weight="700">Поиск...</Text>
          </div>
          <Text className={st.hotKey} weight="700">
            Ctrl + K
          </Text>
        </button>
        <PlaceholderImage src="" width={40} height={40} className={st.avatar} />
      </div>
    </div>
  )
}

export { Header }
