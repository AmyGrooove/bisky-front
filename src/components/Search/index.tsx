import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

import { SEARCH_ICON } from '@/theme/sources'
import { SHIKI_URL } from '@/supportingTool/constatns'
import { getNormalKind } from '@/supportingTool/functions'

import { HeaderContext } from '../Header'

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
          <Image
            width={32} height={32}
            src={SEARCH_ICON} alt="" />
        </button>
      </div>
      <div
        className={`${styles.search__result} ${
          inputValue !== '' && headerObj.bool && styles.search__result_active
        }`}
      >
        {searchResult.length !== 0 ? (
          searchResult.map((el, index) => (
            <div key={el.shiki_id} className={styles.search__result__element}>
              <Link href="#">
                <div className={styles.search__result__element__item}>
                  <Image
                    src={
                      SHIKI_URL + 'system/animes/original/' + el.image + '.jpg'
                    }
                    width={60}
                    height={90}
                    alt=""
                    className={styles.search__result__element__item_img}
                  />
                  <div className={styles.search__result__element__item__info}>
                    <div
                      className={
                        styles.search__result__element__item__info_label
                      }
                    >
                      <h1
                        className={
                          styles.search__result__element__item__info_label_ru
                        }
                      >
                        {el.label.ru}
                      </h1>
                      <h2
                        className={
                          styles.search__result__element__item__info_label_en
                        }
                      >
                        {el.label.en}
                      </h2>
                    </div>
                    <div
                      className={
                        styles.search__result__element__item__info_adit
                      }
                    >
                      <h3
                        className={
                          styles.search__result__element__item__info_adit_text
                        }
                      >
                        {getNormalKind(el.kind)}
                      </h3>
                      <h3
                        className={
                          styles.search__result__element__item__info_adit_slash
                        }
                      >
                        /
                      </h3>
                      <h3
                        className={
                          styles.search__result__element__item__info_adit_text
                        }
                      >
                        {new Date(el.aired_on).getFullYear()}
                      </h3>
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
          <h1 className={styles.search__result_none}>
            Ничего не нашлось :{'('}
          </h1>
        )}
      </div>
    </div>
  )
}

export default Search
