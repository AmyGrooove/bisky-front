import { TResponse } from '@shared/types'
import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { useEffect, useState } from 'react'
import { ANIMES_COUNT } from '../static/ANIMES_COUNT'
import { getAnimeSitemap } from '@entities/anime/api'
import { addAnimesToShikiBanList } from '@entities/parser/api'

const useAllAnimesPage = () => {
  const [allAnimes, setAllAnimes] = useState<TResponse<typeof getAnimeSitemap>>(
    [],
  )

  const [animesToDelete, setAnimesToDelete] = useState<string[]>([])
  const [animesToTrust, setAnimesToTrust] = useState<string[]>([])

  const validate = async () => {
    const stored = localStorage.getItem('trustList')
    const trustAnimeIDs: string[] = stored ? JSON.parse(stored) : []
    const updatedTrustAnimes = Array.from(
      new Set([...trustAnimeIDs, ...animesToTrust]),
    )
    localStorage.setItem('trustList', JSON.stringify(updatedTrustAnimes))

    await addAnimesToShikiBanList({ shikiIDList: animesToDelete })
    setAnimesToDelete([])
    setAnimesToTrust([])
    await updateSitemap()
  }

  const updateSitemap = async () => {
    getAnimeSitemap().then((response) => {
      const stored = localStorage.getItem('trustList')
      const trustAnimeIDs: string[] = stored ? JSON.parse(stored) : []

      const newResponse = response.filter(
        ({ shikiID }) => !trustAnimeIDs.includes(String(shikiID)),
      )
      newResponse.length = ANIMES_COUNT

      setAllAnimes(newResponse)
    })
  }

  const addAnimeToDeleteList = (shikiID: number) => {
    setAnimesToDelete((prev) =>
      prev.includes(String(shikiID))
        ? prev.filter((id) => id !== String(shikiID))
        : [...prev, String(shikiID)],
    )
    setAnimesToTrust((prev) => prev.filter((id) => id !== String(shikiID)))
  }

  const addAnimeToTrustList = (shikiID: number) => {
    setAnimesToTrust((prev) =>
      prev.includes(String(shikiID))
        ? prev.filter((id) => id !== String(shikiID))
        : [...prev, String(shikiID)],
    )
    setAnimesToDelete((prev) => prev.filter((id) => id !== String(shikiID)))
  }

  useKeyboardShortcut({
    keys: ['d'],
    callback: () => validate(),
    modifiers: ['ctrlKey'],
  })

  useEffect(() => {
    updateSitemap()
  }, [])

  return {
    allAnimes,
    animesToDelete,
    validate,
    addAnimeToDeleteList,
    addAnimeToTrustList,
    animesToTrust,
  }
}

export { useAllAnimesPage }
