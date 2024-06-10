import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

import { getCurrentUserData } from "@appData/profile/api"
import { IUserPublicFullModel } from "@entities/User"

import st from "./SettingsBlock.module.scss"
import { SettingsHeader } from "./SettingsHeader/SettingsHeader"
import { SettingsLoading } from "./SettingsLoading/SettingsLoading"

const SettingsBlock = () => {
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

  return (
    <div className={st.root}>
      {isLoading ? (
        <SettingsLoading />
      ) : (
        <>
          <SettingsHeader
            avatar={userData?.avatar + "?" + Date.now().toString() ?? ""}
            background={userData?.userPersonalization.background ?? ""}
            setIsLoading={setIsLoading}
          />
        </>
      )}
    </div>
  )
}

export { SettingsBlock }
