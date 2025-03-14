import { useFormContext } from 'react-hook-form'
import { IAuthTabProps } from '../../types/IAuthTabProps'

const usePasswordAuthTab = (props: IAuthTabProps) => {
  const { setNewTab } = props

  const {
    control,
    formState: { isValid },
  } = useFormContext()

  const goBack = () => {
    setNewTab(0)
  }

  return { control, isValid, goBack }
}

export { usePasswordAuthTab }
