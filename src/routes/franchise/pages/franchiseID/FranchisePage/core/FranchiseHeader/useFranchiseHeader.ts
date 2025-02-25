import { IFranchiseHeaderProps } from '../../types/IFranchiseHeaderProps'

const useFranchiseHeader = (props: IFranchiseHeaderProps) => {
  const { name, description } = props

  return { description, name }
}

export { useFranchiseHeader }
