import { ISetFilterTagsProps } from "@features/FilterBar/types/ISetFilterTagsProps"
import { InputField } from "@shared/ui/molecules"

const SetFilterTags = (props: ISetFilterTagsProps) => {
  const { label, items } = props

  return (
    <></>
    // <div {...otherProps} className={cn(st.root, className)}>
    //   <div
    //     className={st.collapse}
    //     onClick={() => setOpenItems((prevState) => !prevState)}
    //   >
    //     <Text weight="700" size="20">
    //       {label}
    //     </Text>
    //     <ArrowIcon
    //       className={cn(st.collapseIcon, {
    //         [st.collapseIcon_opened]: openItems,
    //       })}
    //     />
    //   </div>
    //   <InputField />
    //   <div></div>
    // </div>
  )
}

export { SetFilterTags }
