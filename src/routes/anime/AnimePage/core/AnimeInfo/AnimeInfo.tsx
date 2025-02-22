import { IAnimeSectionProps } from '../../types/IAnimeSectionProps'
import st from './AnimeInfo.module.scss'
import { ListButtons } from './ListButtons/ListButtons'

const AnimeInfo = ({ data }: IAnimeSectionProps) => {
  return (
    <div className={st.root}>
      <ListButtons data={data} />
    </div>
  )
}

export { AnimeInfo }
