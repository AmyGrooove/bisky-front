import { IUsersSubscriptionsProps } from "../types/IUsersSubscriptionsProps"

const useUsersSubscriptions = (props: IUsersSubscriptionsProps) => {
  const { userData } = props

  return { userData }
}

export { useUsersSubscriptions }
