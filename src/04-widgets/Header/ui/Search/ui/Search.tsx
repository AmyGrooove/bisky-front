"use client"

import Link from "next/link"

import { Input } from "@/01-shared/ui/Input"
import { IconButton } from "@/01-shared/ui/IconButton"
import { SearchIcon } from "@/01-shared/ui/icons"
import { AppImage } from "@/01-shared/ui/AppImage"
import { Title } from "@/01-shared/ui/Title"
import { Divider } from "@/01-shared/ui/Divider"
import { getYearReleased, prettyKind } from "@/02-entities/anime"

import { useSearch } from "../lib"

import styles from "./Search.module.scss"

const Search = () => {
  const { inputValue, setInputValue, searchResult, inputRef } = useSearch()

  return (
    <div className={styles.search}>
      <Input
        variant="dark"
        right={<IconButton icon={<SearchIcon />} />}
        type="text"
        placeholder="Поиск"
        inputMode="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue !== "" &&
        (searchResult.length === 0 ? (
          <div className={styles.searchResult} ref={inputRef}>
            <span className={styles.searchResult__item}>Ничего не найдено</span>
          </div>
        ) : (
          <div className={styles.searchResult} ref={inputRef}>
            {searchResult.map((item, index) => (
              <>
                <Link
                  href={`/anime/${item.id}`}
                  key={item.id}
                  className={styles.searchResult__item}
                  onClick={(e) => setInputValue("")}
                >
                  <AppImage
                    src={item.id?.toString()!}
                    width={60}
                    height={84}
                    imageType="poster"
                  />
                  <div className={styles.searchResult__item__labels}>
                    <div>
                      <Title order={4}>{item.labels[0]}</Title>
                      <span
                        className={styles.searchResult__item__labels_subtitle}
                      >
                        {item.labels[1]}
                      </span>
                    </div>
                    <span>
                      {getYearReleased(item.dates.airedOn)} /{" "}
                      {prettyKind(item.kind)}
                    </span>
                  </div>
                </Link>
                {index !== searchResult.length - 1 && (
                  <Divider key={index} color="bisky" />
                )}
              </>
            ))}
          </div>
        ))}
    </div>
  )
}

export { Search }
