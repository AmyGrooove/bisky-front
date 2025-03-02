import { ISelectElementProps } from '../../types/ISelectElementProps'

const useSelectElement = (props: ISelectElementProps) => {
  const { side, poster, label, selectThis, _id } = props

  return { side, poster, label, selectThis, _id }
}

export { useSelectElement }
