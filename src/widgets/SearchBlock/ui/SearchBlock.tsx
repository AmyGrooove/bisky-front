import { Fragment } from "react"
import Image from "next/image"

import { cn } from "@shared/utils/functions"
import { InputField } from "@shared/ui/molecules"
import { Text } from "@shared/ui/atoms"

import { ISearchBlockProps } from "../types/ISearchBlockProps"

import { ResultRow } from "./ResultRow/ResultRow"
import st from "./SearchBlock.module.scss"
import { ResultRowLoading } from "./ResultRowLoading/ResultRowLoading"
import { useSearchBlock } from "./useSearchBlock"

const SearchBlock = (props: ISearchBlockProps) => {
  const { className, ...otherProps } = props

  const { searchInput, changeInput, isLoading, searchResults } =
    useSearchBlock()

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <InputField
        variant="dark"
        placeholder="Название аниме"
        isSearchIconOn
        value={searchInput}
        onChange={(event) => changeInput(event.target.value)}
        className={st.input}
        autoFocus
      />
      {isLoading ? (
        <ResultRowLoading />
      ) : searchInput === "" ? (
        <div className={st.zeroResult}>
          <Image
            width={160}
            height={160}
            src="/images/biskyOpenMouth.png"
            alt=""
          />
          <Text size="20">Введите название аниме</Text>
        </div>
      ) : searchResults.length === 0 ? (
        <div className={st.zeroResult}>
          <Image
            width={95}
            height={160}
            src="/images/biskySmallCry.png"
            alt=""
          />
          <Text size="20">Ничего не найдено</Text>
        </div>
      ) : (
        <div className={st.searchWrapper}>
          {searchResults.map((item) => (
            <Fragment key={item._id}>
              <ResultRow animeData={item} />
              <div className={st.divider} />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  )
}

export { SearchBlock }
