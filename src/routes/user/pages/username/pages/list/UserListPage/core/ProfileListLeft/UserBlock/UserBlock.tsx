import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import st from './UserBlock.module.scss'
import { Text } from '@shared/ui/atoms/Text'
import Link from 'next/link'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { useUserBlock } from './useUserBlock'

const UserBlock = () => {
  const { data, isLoading } = useUserBlock()

  if (isLoading) return <Skeleton className={st.loading} />

  return (
    <Link href={`/user/${data?.username}`} className={st.root}>
      <div className={st.profile}>
        <PlaceholderImage
          src={data?.avatar ?? null}
          sizes={[120, 80]}
          className={st.avatar}
        />
        <Text weight="700" className={st.username} maxLines={1}>
          {data?.username ?? ''}
        </Text>
      </div>
      <PlaceholderImage
        src={null}
        sizes={[500, 250]}
        className={st.background}
      />
    </Link>
  )
}

export { UserBlock }
