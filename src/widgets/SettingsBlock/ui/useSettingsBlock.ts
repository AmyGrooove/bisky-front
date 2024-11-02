import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"

import { getCurrentUserData } from "@appData/profile/api"
import { IUserPublicFullModel } from "@entities/User"

const useSettingsBlock = () => {
  const { data: session } = useSession()

  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState<IUserPublicFullModel | null>(null)

  useEffect(() => {
    setIsLoading(true)

    if (session)
      getCurrentUserData({ username: session.username })
        .then((response) => setUserData(response ?? null))
        .finally(() => setIsLoading(false))
    else {
      setUserData(null)
      setIsLoading(false)
    }
  }, [session])

  return { isLoading, userData, setIsLoading }
}

export { useSettingsBlock }
