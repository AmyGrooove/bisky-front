import Link from 'next/link'
import { useContext } from 'react'

import { SEARCH_ICON } from '@/theme/sources'
import { getNormalKind } from '@/supportingTool/functions'
import AmyImage from '@/components/Common/AmyImage'

import { HeaderContext } from '..'

import styles from './index.module.scss'
import useSearch from './index.use'

const Search = () => {
  const { inputValue, setInputValue, searchResult } = useSearch()
  const headerObj = useContext(HeaderContext)

  return (
    <div className={styles.search}>
      <div className={styles.search__inputFloor}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Поиск"
          onFocus={headerObj.func}
          onBlur={headerObj.func}
          className={styles.search__inputFloor_input}
        />
        <button className={styles.search__inputFloor_icon} onClick={() => {}}>
          <AmyImage
            src={SEARCH_ICON} width={32}
            height={32} />
        </button>
      </div>
      <div
        className={`${styles.search__result} ${
          inputValue !== '' && headerObj.bool && styles.search__result_active
        }`}
      >
        {searchResult.length !== 0 ? (
          searchResult.map((el, index) => (
            <div key={el.label.en} className={styles.search__result__element}>
              <Link href={'/anime/' + el.shiki_id}>
                <div className={styles.search__result__element__item}>
                  <AmyImage
                    src={el.image}
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
                        {el.label.ru}
                      </h4>
                      <h5
                        className={
                          styles.search__result__element__item__info_label_en
                        }
                      >
                        {el.label.en}
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
                        {new Date(el.aired_on).getFullYear()}
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
            Ничего не нашлось :{'('}
          </span>
        )}
      </div>
    </div>
  )
}

export default Search
