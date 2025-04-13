import { UseMutationOptions } from '@tanstack/react-query'

import { TResponse } from './TResponse'

type TUseMutationOptions<T extends (...args: any) => any> = Omit<
  UseMutationOptions<
    TResponse<T>,
    Error,
    Parameters<T> extends [] ? void : Parameters<T>[0]
  >,
  'onSuccess' | 'onError' | 'mutationFn'
>

export type { TUseMutationOptions }
