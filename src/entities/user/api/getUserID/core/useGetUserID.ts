import { useQuery } from '@tanstack/react-query'
import { getUserID } from './getUserID'

const useGetUserID = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: ({ signal }) => getUserID(signal),
  })
}

export { useGetUserID }
