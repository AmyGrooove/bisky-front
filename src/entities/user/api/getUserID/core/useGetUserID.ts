import { useQuery } from '@tanstack/react-query'
import { getUserID } from './getUserID'

const useGetUserID = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: ({ signal }) => getUserID(false, signal),
  })
}

export { useGetUserID }
