import { IStudioSectionProps } from '../../types/IStudioSectionProps'

const useStudioHeader = (props: IStudioSectionProps) => {
  const {
    data: {
      studio: { description, name },
    },
  } = props

  return { description, name }
}

export { useStudioHeader }
