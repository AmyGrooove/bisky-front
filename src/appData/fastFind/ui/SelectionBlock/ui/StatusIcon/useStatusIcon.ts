import { IStatusIconProps } from "../../types/IStatusIconProps"

const useStatusIcon = (props: IStatusIconProps) => {
  const { selectedStatus } = props

  return { selectedStatus }
}

export { useStatusIcon }
