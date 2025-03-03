import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { useEffect, useState } from 'react'
import { useAddAnimesToShikiBanList } from '@entities/parser/api/addAnimesToShikiBanList'
import { useGetAllAnimes } from '@entities/anime/api/getAllAnimes'

const useAllAnimesPage = () => {
  const [excludedAnimeIDs, setExcludedAnimeIDs] = useState<string[]>([])

  const { data: allAnimes = [] } = useGetAllAnimes(excludedAnimeIDs)

  const { mutateAsync: addAnimesToShikiBanList } = useAddAnimesToShikiBanList()

  const [animesToDelete, setAnimesToDelete] = useState<string[]>([])
  const [animesToTrust, setAnimesToTrust] = useState<string[]>([])

  const getAndUpdateTrustAnimes = () => {
    const stored = localStorage.getItem('trustList')
    const trustAnimeIDs: string[] = stored ? JSON.parse(stored) : []
    const updatedTrustAnimes = Array.from(
      new Set([...trustAnimeIDs, ...animesToTrust]),
    )
    localStorage.setItem('trustList', JSON.stringify(updatedTrustAnimes))

    return updatedTrustAnimes
  }

  const validate = async () => {
    const trustedAnimes = getAndUpdateTrustAnimes()
    setExcludedAnimeIDs(trustedAnimes)

    await addAnimesToShikiBanList({ shikiIDList: animesToDelete })
    setAnimesToDelete([])
    setAnimesToTrust([])
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
    const trustedAnimes = getAndUpdateTrustAnimes()
    setExcludedAnimeIDs(trustedAnimes)
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
