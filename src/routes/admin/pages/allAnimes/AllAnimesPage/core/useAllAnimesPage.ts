import { useKeyboardShortcut } from '@shared/utils/hooks/useKeyboardShortcut'
import { MouseEvent, useState } from 'react'
import { useAddAnimesToShikiBanList } from '@entities/parser/api/addAnimesToShikiBanList'
import { useGetAllAnimes } from '@entities/anime/api/getAllAnimes'
import { useAddAnimesToShikiTrustList } from '@entities/parser/api/addAnimesToShikiTrustList'

const useAllAnimesPage = () => {
  const { data: allAnimes = [] } = useGetAllAnimes()

  const { mutateAsync: addAnimesToShikiBanList } = useAddAnimesToShikiBanList()
  const { mutateAsync: addAnimesToShikiTrustList } =
    useAddAnimesToShikiTrustList()

  const [animesToDelete, setAnimesToDelete] = useState<string[]>([])
  const [animesToTrust, setAnimesToTrust] = useState<string[]>([])

  const validate = async () => {
    await addAnimesToShikiBanList({ shikiIDList: animesToDelete })
    await addAnimesToShikiTrustList({ shikiIDList: animesToTrust })
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

  const goToAnime = (event: MouseEvent, animeID: string) => {
    event.preventDefault()

    if (event.button === 1) {
      window.open(`/anime/${animeID}`, '_blank')
    }
  }

  useKeyboardShortcut({
    keys: ['d'],
    callback: () => validate(),
    modifiers: ['ctrlKey'],
  })

  return {
    allAnimes,
    animesToDelete,
    validate,
    addAnimeToDeleteList,
    addAnimeToTrustList,
    animesToTrust,
    goToAnime,
  }
}

export { useAllAnimesPage }
