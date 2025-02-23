import { SearchModule } from '@entities/search/ui/SearchModule'
import st from './SearchPage.module.scss'

const SearchPage = () => {
  return (
    <>
      <SearchModule />
      <div className={st.barMargin} />
    </>
  )
}

export { SearchPage }
