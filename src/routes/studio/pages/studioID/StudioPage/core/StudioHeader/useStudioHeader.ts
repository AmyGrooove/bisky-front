import { IStudioHeaderProps } from '../../types/IStudioHeaderProps'

const useStudioHeader = (props: IStudioHeaderProps) => {
  const { description, name } = props

  return { description, name }
}

export { useStudioHeader }
