import { IProfileHeaderProps } from "../types/IProfileHeaderProps"

const useProfileHeader = (props: IProfileHeaderProps) => {
  const { userData } = props

  return { userData }
}

export { useProfileHeader }
