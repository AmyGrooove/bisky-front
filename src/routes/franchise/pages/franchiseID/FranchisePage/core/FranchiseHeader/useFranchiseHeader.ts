import { IFranchiseSectionProps } from '../../types/IFranchiseSectionProps'

const useFranchiseHeader = (props: IFranchiseSectionProps) => {
  const {
    data: {
      franchise: { description, name, shikiID },
    },
  } = props

  return { description, name, shikiID }
}

export { useFranchiseHeader }
