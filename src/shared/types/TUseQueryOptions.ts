import { UseQueryOptions } from '@tanstack/react-query'

import { TResponse } from './TResponse'

type TUseQueryOptions<T extends (...args: any) => any> = Omit<
  UseQueryOptions<TResponse<T>>,
  'queryKey' | 'queryFn'
>

export type { TUseQueryOptions }
