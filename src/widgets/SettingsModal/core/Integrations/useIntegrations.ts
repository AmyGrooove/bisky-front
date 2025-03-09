import { useGetUserOAuthIDs } from '@entities/user/api/getUserOAuthIDs'

const useIntegrations = () => {
  const { data = { yandex: null, google: null }, isLoading } =
    useGetUserOAuthIDs()

  return { data, isLoading }
}

export { useIntegrations }
