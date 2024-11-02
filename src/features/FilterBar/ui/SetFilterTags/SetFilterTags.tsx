import { Badge, InputField } from "@shared/ui/molecules"
import { cn } from "@shared/utils/functions"
import { Skeleton } from "@shared/ui/atoms"
import { CrossIcon } from "@shared/icons"

import { ISetFilterTagsProps } from "../../types/ISetFilterTagsProps"

import st from "./SetFilterTags.module.scss"
import { useSetFilterTags } from "./useSetFilterTags"

const SetFilterTags = (props: ISetFilterTagsProps) => {
  const {
    searchInput,
    setSearchInput,
    filteredSelectedItems,
    filteredItems,
    className,
    isLoading,
    name,
    otherProps,
  } = useSetFilterTags(props)

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <InputField
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        isSearchIconOn
        placeholder="Поиск"
        className={st.input}
      />
      {filteredSelectedItems.length !== 0 && (
        <div className={st.itemsWrapper}>
          {filteredSelectedItems.map((item) => (
            <Badge
              key={item.label + "selected"}
              className={cn(st.item, st.item_selected)}
              onClick={() =>
                item.isSelected ? item.deleteIncludeItem() : item.includeItem()
              }
              rightIcon={<CrossIcon />}
            >
              {item.label}
            </Badge>
          ))}
        </div>
      )}
      <div className={st.itemsWrapper}>
        {isLoading ? (
          <>
            {[...Array(19)].map((_, index) => (
              <Skeleton key={name + index} className={st.skeletonItem} />
            ))}
          </>
        ) : (
          <>
            {filteredItems.map((item) => (
              <Badge
                key={item.label}
                className={st.item}
                onClick={() =>
                  item.isSelected
                    ? item.deleteIncludeItem()
                    : item.includeItem()
                }
              >
                {item.label}
              </Badge>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export { SetFilterTags }
