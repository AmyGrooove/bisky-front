import { SEARCH_ICON } from "@/constants"
import AmyImage from "@/components/common/AmyImage"

import styles from "./index.module.scss"
import useSearch from "./index.use"

const Search = () => {
  const { inputValue, setInputValue } = useSearch()

  return (
    <div className={styles.search}>
      <div className={styles.search__inputFloor}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Поиск"
          className={styles.search__inputFloor_input}
        />
        <button className={styles.search__inputFloor_icon} onClick={() => {}}>
          <AmyImage src={SEARCH_ICON} width={32} height={32} />
        </button>
      </div>
      {/* <div className={styles.search__result}>
        <div
          className={`${styles.search__result__block} ${
            inputValue !== "" &&
            headerObj.bool &&
            styles.search__result__block_active
          }`}
        >
          {searchResult.length !== 0 ? (
            searchResult.map((el, index) => (
              <div
                key={el.labels[1]}
                className={styles.search__result__element}
              >
                <Link href={"/anime/" + el.shiki_id}>
                  <div className={styles.search__result__element__item}>
                    <AmyImage
                      src={el.poster}
                      width={60}
                      height={90}
                      imageType="search"
                      quality={80}
                      className={styles.search__result__element__item_img}
                    />
                    <div className={styles.search__result__element__item__info}>
                      <div
                        className={
                          styles.search__result__element__item__info_label
                        }
                      >
                        <h4
                          className={
                            styles.search__result__element__item__info_label_ru
                          }
                        >
                          {el.labels[0]}
                        </h4>
                        <h5
                          className={
                            styles.search__result__element__item__info_label_en
                          }
                        >
                          {el.labels[1]}
                        </h5>
                      </div>
                      <div
                        className={
                          styles.search__result__element__item__info_adit
                        }
                      >
                        <span
                          className={
                            styles.search__result__element__item__info_adit_text
                          }
                        >
                          {getNormalKind(el.kind)}
                        </span>
                        <span
                          className={
                            styles.search__result__element__item__info_adit_slash
                          }
                        >
                          /
                        </span>
                        <span
                          className={
                            styles.search__result__element__item__info_adit_text
                          }
                        >
                          {new Date(el.dates.aired_on || "").getFullYear()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                {index !== searchResult.length - 1 && (
                  <div className={styles.search__result__element__br} />
                )}
              </div>
            ))
          ) : (
            <span className={styles.search__result_none}>
              Ничего не нашлось :{"("}
            </span>
          )}
        </div>
      </div> */}
    </div>
  )
}

export default Search
