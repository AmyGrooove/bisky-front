import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { cn, getEmptyArray, normalizeDate } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import { CrossIcon } from '@shared/icons'

import { useSessionManager } from './useSessionManager'
import st from './SessionManager.module.scss'

const SessionManager = () => {
  const {
    currentSessions,
    otherSessions,
    isLoading,
    isPending,
    deleteCurrentSession,
  } = useSessionManager()

  if (isLoading)
    return (
      <div className={st.root}>
        {getEmptyArray(4).map((_, index) => (
          <Skeleton key={index} className={st.skeletonSession} />
        ))}
      </div>
    )

  return (
    <div className={st.root}>
      <Text className={st.text}>Текущая сессия</Text>
      <div className={cn(st.session, st.sessionData)}>
        <Text weight="700">{currentSessions?.deviceType}</Text>
        <Text>{currentSessions?.location}</Text>
        <Text className={st.loggedOn}>
          {normalizeDate(currentSessions?.loggedOn ?? new Date())}
        </Text>
      </div>
      {otherSessions?.length !== 0 && (
        <>
          <div className={st.separator} />
          <Text className={st.text}>Другие сессии</Text>
        </>
      )}
      {otherSessions?.map((session) => (
        <div
          className={cn(st.session, st.otherSession)}
          key={session.refreshToken}
        >
          <div className={st.sessionData}>
            <Text weight="700">{currentSessions?.deviceType}</Text>
            <Text>{currentSessions?.location}</Text>
            <Text className={st.loggedOn}>
              {normalizeDate(currentSessions?.loggedOn ?? new Date())}
            </Text>
          </div>
          <Button
            isDisabled={isPending}
            onClick={() => deleteCurrentSession(session.refreshToken)}
            variant="big"
            Icon={CrossIcon}
          />
        </div>
      ))}
    </div>
  )
}

export { SessionManager }
