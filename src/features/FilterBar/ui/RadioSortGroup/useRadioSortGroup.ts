import { IRadioSortGroupProps } from "../../types/IRadioSortGroupProps"

const useRadioSortGroup = (props: IRadioSortGroupProps) => {
  const { items, checkedItem, className, ...otherProps } = props

  return { items, checkedItem, className, otherProps }
}

export { useRadioSortGroup }
