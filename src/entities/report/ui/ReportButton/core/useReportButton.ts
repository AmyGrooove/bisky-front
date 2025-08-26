import { IReportButtonProps } from '../types/IReportButtonProps'

const useReportButton = (props: IReportButtonProps) => {
  const { variant = 'big' } = props

  return { variant }
}

export { useReportButton }
