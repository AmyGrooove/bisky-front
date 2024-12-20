import { IDatesBetweenSelectorProps } from "../../types/IDatesBetweenSelectorProps"

const useDatesBetweenSelector = (props: IDatesBetweenSelectorProps) => {
  const { changeDates, from, to, className, ...otherProps } = props

  const setDate = (value: string, isFrom = true) => {
    if (!/^(\d{1,4})?$/g.test(value)) return

    if (isFrom) changeDates(value !== "" ? Number(value) : null, to)
    else changeDates(from, value !== "" ? Number(value) : null)
  }

  return { setDate, from, to, className, otherProps }
}

export { useDatesBetweenSelector }
