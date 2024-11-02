import st from "./SettingsBlock.module.scss"
import { SettingsHeader } from "./SettingsHeader/SettingsHeader"
import { SettingsLoading } from "./SettingsLoading/SettingsLoading"
import { useSettingsBlock } from "./useSettingsBlock"

const SettingsBlock = () => {
  const { isLoading, userData, setIsLoading } = useSettingsBlock()

  return (
    <div className={st.root}>
      {isLoading ? (
        <SettingsLoading />
      ) : (
        <>
          <SettingsHeader
            avatar={userData?.avatar ?? ""}
            background={userData?.userPersonalization.background ?? ""}
            setIsLoading={setIsLoading}
          />
        </>
      )}
    </div>
  )
}

export { SettingsBlock }
