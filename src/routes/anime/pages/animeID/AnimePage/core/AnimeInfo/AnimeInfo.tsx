import { IAnimeSectionProps } from '../../types/IAnimeSectionProps'
import { AdditionalInfo } from './AdditionalInfo/AdditionalInfo'
import st from './AnimeInfo.module.scss'
import { ListButtons } from './ListButtons/ListButtons'
import { ListStatus } from './ListStatus/ListStatus'

const AnimeInfo = ({ data }: IAnimeSectionProps) => {
  return (
    <div className={st.root}>
      <ListButtons data={data} />
      <ListStatus data={data} />
      <AdditionalInfo data={data} />
    </div>
  )
}

export { AnimeInfo }
