import Link from "next/link"

import { PlaceholderImage, Text } from "@shared/ui/atoms"

import { IUsersSubscriptionsProps } from "../types/IUsersSubscriptionsProps"

import st from "./UsersSubscriptions.module.scss"
import { useUsersSubscriptions } from "./useUsersSubscriptions"

const UsersSubscriptions = (props: IUsersSubscriptionsProps) => {
  const { userData } = useUsersSubscriptions(props)

  return (
    <div className={st.rightSide}>
      <Text size="32" weight="700" isDefaultColor={false} className={st.link}>
        Подписки
      </Text>
      {userData.subscriptions.length === 0 ? (
        <Text>Ничего нет (－_－) zzZ</Text>
      ) : (
        <div className={st.subWrapper}>
          {userData.subscriptions.map((item) => (
            <Link key={item._id} href={"/profile/" + item.username}>
              <PlaceholderImage
                width={300}
                height={300}
                src={
                  item?.avatar ? `${item.avatar}?${Date.now().toString()}` : ""
                }
                alt=""
                className={st.avatar}
                imageClassName={st.avatarImage}
                quality={100}
                unoptimized
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export { UsersSubscriptions }
