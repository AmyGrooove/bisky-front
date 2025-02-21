import { useRouter } from 'next/navigation'

const useBackButton = () => {
  const { back } = useRouter()

  return { back }
}

export { useBackButton }
